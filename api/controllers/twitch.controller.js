
require('dotenv').config();
const axios = require('axios');
const clientId = process.env.TWITCH_API_CLIENT_ID;
const clientSecret = process.env.TWITCH_API_CLIENT_SECRET;
const apiUrl = process.env.TWITCH_URI;

let accessToken;
let headers;

axios.post(process.env.TWITCH_OAUTH_URI, {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'client_credentials'
})
.then(function (response) {
    accessToken = response.data.access_token;

    headers = {
        'Client-Id': clientId,
        'Authorization': `Bearer ${ accessToken }`
    };
})
.catch((err) => {
    console.error(`Error while getting Twitch OAuth access token: ${err}.`);
});

const TwitchController = {
    getSortedStreams: async (req, res) => {
        const params = {
            'sort': 'viewers',
        };

        const endpoint = apiUrl + process.env.TWITCH_STREAMS_RESOURCE + '?first=10';

        axios.get(endpoint, { headers, params })
        .then(response => {
            const data = response.data;
            const streams = data.data || [];

            res.status(200).send(streams);
        })
        .catch ((err) => {
            res.status(500).send(err);
        });  
    },
    getStream: async (req, res) => {
        const userId = req.query.id;
        const endpoint = `${apiUrl}/users?id=${userId}`;

        axios.get(endpoint, { headers })
        .then(response => {
            const data = response.data;
            const channels = data.data || [];

            res.status(200).send(channels);
        })
        .catch ((err) =>{
            // TODO: Don't justt return 500 -- This gets hit when we get a 404 response from the twitch API.
            res.status(500).send(`Error when querying for Twitch channel with id ${userId}: ${err}.`);
        });
    }
}

module.exports = TwitchController;