
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Stores invalidated tokens.
const invalidatedTokens = new Set();

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' }); 
    }
    if (invalidatedTokens.has(token)) {
        return res.status(401).json({ message: 'Token has been invalidated.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token.' });
    }
}

module.exports = { verifyToken, invalidatedTokens };