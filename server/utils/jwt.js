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

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        console.error(`Error while verifying json web token: ${err}.`);
        return null;
    }
}

module.exports = { generateToken, verifyToken };