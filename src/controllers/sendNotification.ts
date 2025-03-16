import { Request, Response } from "express";
import admin from "../config/firebaseAdmin";

const sendNotification = async (req: Request, res: Response): Promise<void> => {
    const { token, title, body } = req.body;

    if (!token || !title || !body) {
        res.status(400).send("Missing required fields");
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
        res.status(500).send({ success: false, error: error });
    }
};

export default sendNotification
