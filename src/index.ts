import dotenv from "dotenv";
import express from "express";
import configureDB from "./config/db";
import sendNotification from "./controllers/sendNotification";
dotenv.config();

const { PORT=5000 } = process.env;
const app = express();

configureDB();
app.use(express.json());

app.get("/ping", (_req, res) => {
    res.json({message: "Hello from server."})
})
app.post('/send-notification', sendNotification);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`))