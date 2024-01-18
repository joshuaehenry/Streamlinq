const express = require('express');
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();

const twitchRoutes = require('./routes/twitch.routes');
const youtubeRoutes = require('./routes/youtube.routes');

app.use(cors());
app.use('/twitch', twitchRoutes);
// app.use('/youtube', youtubeRoutes);

app.listen(port, (err) => {
    if (!err)
        console.log(`Server is listening on port ${port}.`);
    else
        console.error(`An error has occured when running the streaming API server: ${err}.`);
})