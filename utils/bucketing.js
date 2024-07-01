const Score = require('../models/Score');

const assignBucket = async (user, event) => {
    const buckets = await Score.aggregate([
        { $match: { eventId: event._id } },
        { $group: { _id: '$bucket', count: { $sum: 1 } } },
        { $sort: { _id: 1 } }
    ]);
    let bucket = 0;
    for (const b of buckets) {
        if (b.count < 200) {
            bucket = b._id;
            break;
        }
    }
    if (bucket === 0) {
        bucket = buckets.length;
    }
    return bucket;
};

module.exports = { assignBucket };
