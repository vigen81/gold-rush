const express = require('express');
const { reportScore } = require('../controllers/reportController');
const router = express.Router();

router.post('/', reportScore);

module.exports = router;
