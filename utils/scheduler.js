const cron = require('node-cron');
const Event = require('../models/Event');

const startEvent = async () => {
    const event = new Event({
        eventId: 'event_' + Date.now(),
        state: 'active',
        endTime: new Date(Date.now() + 60 * 60 * 1000) // 1 hour event
    });
    await event.save();
};

const endEvent = async () => {
    await Event.updateMany({ state: 'active' }, { state: 'inactive' });
};

const startScheduler = () => {
    cron.schedule('* * * * *', () => {
        const now = new Date();
        Event.findOne({ state: 'active' }).then((event) => {
            if (event && event.endTime <= now) {
                endEvent();
            }
        });
        Event.findOne({ state: 'inactive' }).then((event) => {
            if (!event) {
                startEvent();
            }
        });
    });
};

module.exports = { startScheduler };
