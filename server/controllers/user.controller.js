const UserModel = require('../models/user.model');
const { verifyToken } = require('../middleware/auth.middleware');

const UserController = {
    updateUser: async (req, res, next) => {
        try {
            verifyToken(req, res);
            const user = req.user;

            if (!user) {
                return res;
            }
            console.log(user);
            const existingData = await UserModel.findOne({ email: user.email.toUpperCase() });
            console.log(existingData);

            const filter = { _id: existingData.id };
            const update = {
                $set: {
                    username: user.username,
                    update_timestamp: Date.now()
                },
            };

            UserModel.updateOne(filter, update)
            .then(result => {
                console.log("we're in .then");
                res.status(201).json({ message: `User was successfully updated!` });
            })
            .catch(err => {
                console.log("we're in mongo err");
                next(err);
            });
        } catch (err) {
            console.log(`we're in outer ex: ${err}`);
            next(err);
        }
    },
    getUser: async (req, res, next) => {
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
            next(err);
        }
    }
}

module.exports = UserController;