const express = require('express');
const { claimRewards } = require('../controllers/claimController');
const router = express.Router();

router.post('/', claimRewards);

module.exports = router;
