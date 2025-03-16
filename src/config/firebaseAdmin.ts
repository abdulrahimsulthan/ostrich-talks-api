import admin, { ServiceAccount } from 'firebase-admin';

const serviceAccount = JSON.parse(
    Buffer.from(process.env.FIREBASE_CREDENTIALS!, 'base64').toString('utf8')
);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount)
})

export default admin;
