const express = require("express");
const sendNotification = require("./controllers/sendNotification");

const app = express();

app.use(express.json());

app.post('/send-notification', sendNotification);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});