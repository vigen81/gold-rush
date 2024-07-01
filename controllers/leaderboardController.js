const Score = require('../models/Score');

exports.getLeaderboard = async (req, res) => {
    try {
        const scores = await Score.find({
            eventId: req.event._id,
            bucket: req.user.bucket
        }).sort({ gold: -1 });
        res.send(scores);
    } catch (error) {
        res.status(500).send(error);
    }
};
