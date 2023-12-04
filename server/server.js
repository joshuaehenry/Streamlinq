const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error.middleware');
const { DBConnection } = require ('./database/database');

require('dotenv').config();
const port = process.env.PORT || 8000;
const app = express();

const userRoutes = require('./routes/user.routes');
const streamerRoutes = require('./routes/streamer.routes');
const authRoutes = require('./routes/auth.routes');

app.use(cors());
app.disable("x-powered-by");
app.use(cookieParser());
app.use(express.json());
app.use('/', authRoutes);
app.use('/user', userRoutes);
app.use('/streamer', streamerRoutes);
app.use(errorMiddleware);

app.listen(port, (err) => {
    if (!err)
        console.log(`Server is listening on port ${port}.`);
    else
        console.log(`An error has occured when running the server: ${err}.`);
});

DBConnection.open();