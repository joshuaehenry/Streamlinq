const mongoose = require('mongoose');

const StreamerSchema = new mongoose.Schema({
    channelName: { type: String, required: true },
    url: { type: String, required: true },
    isLive: { type: Boolean },
    viewCount: { type: Number },
    insertTimestamp: { type: Date, default: Date.now() },
    updateTimestamp: { type: Date, default: Date.now() },
});

module.exports = StreamerModel = mongoose.model('c_streamers', StreamerSchema);