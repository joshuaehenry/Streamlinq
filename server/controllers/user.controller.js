const UserModel = require('../models/user.model');
const { verifyToken } = require('../middleware/auth');

const UserController = {
    updateUser: async (req, res) => {
        try {
            const token = req.cookies.access_token;
            verifyToken(req, res);
            const user = req.user;
            const existingData = await UserModel.findOne({ email: user.email});
            
            const filter = { _id: existingData._id };
            const update = {
                $set: {
                    username: user.username,
                    update_timestamp: Date.now()
                },
            };

            UserModel.updateOne(filter, update)
            .then(result => {
                res.status(201).json({ message: `User was successfully updated!` });
            })
            .catch(err => {
                res.status(500).json({ message: `Error when updating user: ${err}` });
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: `Server error: ${err}` });
        }
    },
    getUser: async (req, res) => {
        try {
            const id = req.query.id;
            const email = req.query.email;
            const username = req.query.username;

            let queryParams = {};

            if (id)
                queryParams['id'] = req.query.id;
            if (email)
                queryParams['email'] = email.toUpperCase();
            if (username)
                queryparams['username'] = username.toUpperCase();
            
            const existingUser = await UserModel.findOne(queryParams);

            if (!existingUser) {
                res.status(401).json({ message: `User not found for criteria '${JSON.stringify(queryParams)}'.` });
            } else {
                res.status(200).json(existingUser);
            }
        } catch (err) {
            res.status(500).json( { message: `Error while querying user: ${err}` });
        }
    }
}

module.exports = UserController;