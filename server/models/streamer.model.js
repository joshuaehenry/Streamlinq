const mongoose = require('mongoose')

const StreamerSchema = new mongoose.Schema({
    channelName: { type: String, required: true },
    url: { type: String, required: true },
    isLive: { type: Boolean },
    insertTimestamp: { type: Date, default: Date.now() },
    updateTimestamp: { type: Date, default: Date.now() },
})

module.exports = StreamerSchema = mongoose.model('Streamers', StreamerSchema)