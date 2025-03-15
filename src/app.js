require("dotenv").config()
const express = require("express");
const sendNotification = require("./controllers/sendNotification");

const app = express();

app.use(express.json());

app.post('/send-notification', sendNotification);

app.listen(process.env.PORT, () => {
    console.log("Server running on port 3000");
});