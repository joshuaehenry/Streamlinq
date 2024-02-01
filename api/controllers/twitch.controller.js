require('dotenv').config();
const axios = require('axios');
const moment = require('moment');
const clientId = process.env.TWITCH_API_CLIENT_ID;
const clientSecret = process.env.TWITCH_API_CLIENT_SECRET;
const apiUrl = process.env.TWITCH_URI;

let accessToken;
let headers;
const paramsSerializer = {
    indexes: null
};

const handleErrorResponse = (res, err) => {
    if (!err || !err.response)
    {
        const errorDetail = process.env.ENVIRONMENT == 'DEV' ? err : '';
        console.error(errorDetail);
        res.status(500).send(`An internal server error has occurred. ${errorDetail}`)
    }
    const response = err.response;

    res.status(response.status).send(response.data);
};

const setTokenAndHeaders = async () => {
    try
    {
        const response = await axios.post(process.env.TWITCH_OAUTH_URI, {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'client_credentials'
        });
        accessToken = response.data.access_token;
        headers = {
            'Client-Id': clientId,
            'Authorization': `Bearer ${accessToken}`
        };
    }   
    catch (err)
    {
        console.error(`Error while getting Twitch OAuth access token: ${err}`);
    }   
};

setTokenAndHeaders();

const TwitchController = {
    getSortedStreams: async (req, res) => {
        const endpoint = apiUrl + process.env.TWITCH_STREAMS_RESOURCE;
        const params = {
            'sort': 'viewers',
            'language': 'en',
            'first': '15',
        };
        
        try
        {
            const response = await axios.get(endpoint, { headers, params });
            const data = response.data;
            const streams = data.data || [];

            res.status(200).send(streams);
        }
        catch (err)
        {
            handleErrorResponse(res, err);
        }
    },
    getStream: async (req, res) => {
        const userIds = req.query.id;
        const params = {
            'id': userIds
        };
        const endpoint = apiUrl + process.env.TWITCH_USERS_RESOURCE;
        try
        {
            const response = await axios.get(endpoint, { headers, params, paramsSerializer });
            res.status(200).send(response.data);
        }
        catch (err)
        {
            handleErrorResponse(res, err);
        }
    },
    getTrendingVideos: async (req, res) => {
        const endpoint = apiUrl + process.env.TWITCH_VIDEOS_RESOURCE;
        const userIds = req.query.user_id;
        const gameIds = req.query.game_id;
        const amount = req.query.amount;

        if (!amount)
        {
            res.status(400).send({
                'status': 400,
                'message': 'Bad request: amount is required.'
            });
        }
        if (amount > 100)
        {
            res.status(400).send({
                'status': 400,
                'message': 'Bad request: amount must be less than 100.'
            });
        }

        const params = {
            'user_id': userIds,
            'game_id': gameIds,
            'language': 'en',
            'sort': 'views',
            'period': 'week',
            'first': '100'
        };

        try
        {
            const response = await axios.get(endpoint, { headers, params, paramsSerializer });
            const data = response.data.data;
            const durationThreshold = moment.duration('5m0s');
            let cnt = 0;
            let videos = {};

            for (const video of data)
            {
                if (cnt == amount)
                {
                    break;
                }
                const userId = video.user_id;
                const duration = moment.duration(video.duration);

                if (userId in videos || duration > durationThreshold)
                {
                    continue;
                }

                videos[userId] = video;
                ++cnt;
            }
            
            res.status(200).send(Object.values(videos));
        }
        catch (err)
        {
            console.log(err);
            handleErrorResponse(err);
        }
    }
}

module.exports = TwitchController;