const Score = require('../models/Score');
const { assignBucket } = require('../utils/bucketing');

exports.reportScore = async (req, res) => {
    const { gold } = req.body;
    try {
        let score = await Score.findOne({
            userId: req.user._id,
            eventId: req.event._id
        });
        if (!score) {
            const bucket = await assignBucket(req.user, req.event);
            score = new Score({
                userId: req.user._id,
                eventId: req.event._id,
                bucket
            });
        }
        score.gold = gold;
        await score.save();
        res.send(score);
    } catch (error) {
        res.status(500).send(error);
    }
};
