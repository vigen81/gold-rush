const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventId: { type: String, required: true },
    state: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
    endTime: { type: Date, required: true }
});

module.exports = mongoose.model('Event', EventSchema);
