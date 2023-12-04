
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
        destroyToken(req, res, next);
        if (err instanceof jwt.TokenExpiredError) {
            res.status(401).json({ message: 'Token has expired.'});
            // TODO: Redirect to login.
            return;
        }
        res.status(500).json({ message: `Error while verifying token: ${err}.`});   
    }
};

const destroyToken = (req, res, next) => {
    res.cookie('access_token', '', { httpOnly:true, secure: process.env.ENVIRONMENT==='PROD', maxAge: 0 });
};

module.exports = { verifyToken, invalidatedTokens, destroyToken };