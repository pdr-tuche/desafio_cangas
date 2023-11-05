import nodemailer from "nodemailer";

export const EmailService = nodemailer.createTransport({
    service: "outlook",
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});
