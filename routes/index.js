const express = require('express');
const authRoutes = require('./authRoutes');
const eventRoutes = require('./eventRoutes');
const reportRoutes = require('./reportRoutes');
const leaderboardRoutes = require('./leaderboardRoutes');
const claimRoutes = require('./claimRoutes');
const authenticate = require('../config/auth');
const { getEvent } = require('../controllers/eventController');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/event', authenticate, eventRoutes);
router.use('/report', authenticate, reportRoutes);
router.use('/leaderboard', authenticate, leaderboardRoutes);
router.use('/claim', authenticate, claimRoutes);

router.use('/', authenticate, getEvent);

module.exports = router;
