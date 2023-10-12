const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    insertTimestamp: { type: Date, default: Date.now() },
    updateTimestamp: { type: Date, default: Date.now() },
})

module.exports = User = mongoose.model('Users', UserSchema)