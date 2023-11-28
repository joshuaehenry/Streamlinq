
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Stores invalidated tokens.
const invalidatedTokens = new Set();

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        res.status(401).json({ message: 'Unauthorized' });
        return; 
    }
    if (invalidatedTokens.has(token)) {
        res.status(401).json({ message: 'Token has been invalidated.' });
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {  
        next(err);
    }
}

module.exports = { verifyToken, invalidatedTokens };