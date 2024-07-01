const calculateRewards = (score) => {
    const ranking = score.bucket.indexOf(score.userId);
    return 200 - ranking - 1;
};

module.exports = { calculateRewards };
