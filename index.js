const express = require("express");
const admin = require('firebase-admin')

const app = express();
app.use(express.json());

const serviceAccount = require('./firebase-service-account.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

app.post('/send-notification', async (req, res) => {
    const { token, title, body } = req.body;

    if (!token || !title || !body) {
        return res.status(400).send("Missing required fields");
    }

    const message = {
        notification: {
            title,
            body,
        },
        token,
    };

    try {
        const response = await admin.messaging().send(message);
        res.status(200).send({ success: true, response });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});