const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/jwt');
const { verifyToken, invalidatedTokens } = require('../middleware/auth');

require('dotenv').config();

const AuthController = {
    logout: async (req, res) => {
        const token = req.cookies.access_token;
        invalidatedTokens.add(token);
        console.log(invalidatedTokens);
        res.json({ message: 'Logout successful.' });
    },
    login: async (req, res) => {
        try {
            const user = req.body;
            const existingUser = await UserModel.findOne({ email: user.email.toUpperCase() });
            
            if (!existingUser || !(await bcrypt.compare(user.password, existingUser.password))) {
                return res.status(401).json({ message: 'Invalid credentials.'});
            }
            
            const token = generateToken(user);

            res.cookie('access_token', token, { httpOnly:true, secure: process.env.ENVIRONMENT==='PROD' });
            res.status(200).json({ message: 'User logged in successfully.', token: token });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: `Server error occured while saving user: ${err}` });
        }
    },
    register: async (req, res) => {
        try {
            const user = req.body;
            const existingUsername = await UserModel.findOne({ username: user.username.toUpperCase() });
            const existingEmail = await UserModel.findOne({ email: user.email.toUpperCase() });

            if (existingUsername || existingEmail) {
                res.json({ message: 'Username or email has already been taken.' });
            } else {
                const newUser = new UserModel({
                    username: user.username.toUpperCase(),
                    email: user.email.toUpperCase(),
                    password: user.password,
                });
                newUser.save();
                const token = generateToken(newUser);
                res.cookie('access_token', token, { httpOnly:true, secure: process.env.ENVIRONMENT==='PROD' });
                res.status(201).json({ message: `User '${newUser.username}' successfully registered.`, token: token });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: `Server error occured while saving user: ${err}` });
        }
    },
}

module.exports = AuthController;