const handleErrorResponse = require('../util');

require('dotenv').config();
const axios = require('axios');
const clientId = process.env.TWITCH_API_CLIENT_ID;
const clientSecret = process.env.TWITCH_API_CLIENT_SECRET;
const apiUrl = process.env.TWITCH_URI;

let accessToken;
let headers;
const paramsSerializer = {
    indexes: null
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

            return res.status(200).send(streams);
        }
        catch (err)
        {
            return handleErrorResponse(res, err);
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
            return res.status(200).send(response.data);
        }
        catch (err)
        {
            return handleErrorResponse(res, err);
        }
    },
    getClips: async (req, res) => {
        const broadcasterIds = req.query.broadcaster_id;
        const gameIds = req.query.game_id;
        const featured = req.query.featured;
        const startedAt = req.query.started_at;
        const endedAt = req.query.ended_at;

        const params = {
            'game_id': gameIds,
            'broadcaster_id': broadcasterIds,
            'is_featured': featured,
            'started_at': startedAt,
            'ended_at': endedAt
        };

        if (!gameIds && !broadcasterIds)
        {
            return res.status(400).send({
                'status': 400,
                'message': 'game_id or broadcaster_id is required.'
            });
        }

        try
        {
            const clipsEndpoint = apiUrl + process.env.TWITCH_CLIPS_RESOURCE;
            const response = await axios.get(clipsEndpoint, { headers, params, paramsSerializer });
            const data = response.data.data;

            return res.status(200).send(data);
        }
        catch (err)
        {
            return handleErrorResponse(res, err);
        }
    }
}

module.exports = TwitchController;