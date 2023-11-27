const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    insertTimestamp: { type: Date, default: Date.now() },
    updateTimestamp: { type: Date, default: Date.now() },
})

// Hash the password prior to saving it to the DB.
UserSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (err) {
        console.error(`Error when hashing password: ${err}.`);
        return next(err);
    }
});

module.exports = UserModel = mongoose.model('c_users', UserSchema);