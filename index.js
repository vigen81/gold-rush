const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');
const { startScheduler } = require('./utils/scheduler');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api', routes);

connectDB().then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
        startScheduler();
    });
}).catch(err => console.log(err));
