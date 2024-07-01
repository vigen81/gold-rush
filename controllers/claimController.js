const Score = require('../models/Score');
const { calculateRewards } = require('../utils/rewards');

exports.claimRewards = async (req, res) => {
    try {
        const score = await Score.findOne({
            userId: req.user._id,
            eventId: req.event._id
        });
        if (!score) {
            return res.status(404).send({ error: 'No score found for event' });
        }
        const rewards = calculateRewards(score);
        res.send({ rewards });
    } catch (error) {
        res.status(500).send(error);
    }
};
