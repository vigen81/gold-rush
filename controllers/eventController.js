const Event = require('../models/Event');

exports.getEvent = async (req, res) => {
    try {
        const event = await Event.findOne({ state: 'active' });
        if (!event) {
            return res.status(404).send({ error: 'No active event' });
        }
        res.send({
            eventId: event.eventId,
            state: event.state,
            endTime: event.endTime
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
