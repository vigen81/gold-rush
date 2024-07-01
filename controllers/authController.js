const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.register = async (req, res) => {
    const { username, password, playerType } = req.body;
    try {
        const user = new User({ username, password, playerType });
        await user.save();
        const token = jwt.sign({ id: user._id }, 'secretkey');
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error();
        }
        const token = jwt.sign({ id: user._id }, 'secretkey');
        res.send({ user, token });
    } catch (error) {
        res.status(400).send({ error: 'Invalid login credentials' });
    }
};

exports.protect = require('../config/auth');
