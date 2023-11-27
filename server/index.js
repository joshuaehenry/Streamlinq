const express = require('express');
const { DBConnection } = require('./database/database');
require('dotenv').config();
const port = process.env.PORT || 8080;
const app = express();

const userRoutes = require('./routes/user.routes');
const streamerRoutes = require('./routes/streamer.routes');

app.use(express.json());
app.use('/user', userRoutes);
app.use('/streamer', streamerRoutes);

app.listen(port, (err) => {
    if (!err)
        console.log(`Server is listening on port ${port}.`);
    else
        console.log(`An error has occured when running the server: ${err}.`);
});

DBConnection.open();