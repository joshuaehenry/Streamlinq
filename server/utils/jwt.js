const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    };

    const options = {
        expiresIn: '1h',
    };

    return jwt.sign(payload, process.env.JWT_SECRET, options);
};
module.exports = { generateToken };