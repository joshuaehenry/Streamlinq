const config = require('./common/global.config');
const express = require('express');
const connectToDB = require('./database/database');

const app = express();

const userRoutes = require('./routes/user.routes');
const streamerRoutes = require('./routes/streamer.routes');

app.use(express.json());
app.use('/user', userRoutes);
app.use('/streamer', streamerRoutes);

app.listen(config.port, (err) => {
    if (!err)
        console.log(`Server is listening on port ${config.port}.`);
    else
        console.log(`An error has occured when running the server: ${err}.`);
});

connectToDB();