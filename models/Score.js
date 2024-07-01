const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    bucket: { type: Number, required: true },
    gold: { type: Number, default: 0 }
});

module.exports = mongoose.model('Score', ScoreSchema);
