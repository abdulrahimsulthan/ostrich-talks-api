require("dotenv").config()
const express = require("express");
const sendNotification = require("./controllers/sendNotification");
const mongoose = require("mongoose")

const app = express();

const { PORT=5000, MONGO_URI } = process.env;

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

app.post('/send-notification', sendNotification);

app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`);
});