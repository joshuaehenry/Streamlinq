
require('dotenv').config();
const axios = require('axios');
const clientId = process.env.TWITCH_API_CLIENT_ID;
const clientSecret = process.env.TWITCH_API_CLIENT_SECRET;
const apiUrl = process.env.TWITCH_URI;

let accessToken;
let headers;

function formatUrl(data)
{
    let endpoint = `${apiUrl}/users?id=`;

    if (typeof(data) == 'object')
    {
        data.forEach((userId, index) => {
            if (index < data.length - 1)
                endpoint += `${userId}&id=`;
            else
                endpoint += `${userId}`;
        });
        return endpoint;
    }

    return endpoint + data;
}

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
        const params = {
            'sort': 'viewers',
        };

        const endpoint = apiUrl + process.env.TWITCH_STREAMS_RESOURCE + '?first=15';

        try
        {
            const response = await axios.get(endpoint, { headers, params });
            const data = response.data;
            const streams = data.data || [];

            res.status(200).send(streams);
        }
        catch
        {
            res.status(404).send(err);
        }
    },
    getStream: async (req, res) => {
        const userIds = req.query.id;
        let endpoint = formatUrl(userIds);

        try
        {
            const response = await axios.get(endpoint, { headers });
            res.status(200).send(response.data);
        }
        catch (err)
        {
            res.status(404).send(`Error when querying for Twitch channel with id(s) ${userIds}: ${err}.`);
        }
    }
}

module.exports = TwitchController;