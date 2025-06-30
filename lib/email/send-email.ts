import * as nodemailer from "nodemailer";
import { env } from "../env";

export interface SendEmailOptions {
  email: string;
  subject: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: env.gmail,
});

export const sendEmail = async ({ email, subject, html }: SendEmailOptions) => {
  return await transporter.sendMail({
    to: email,
    subject,
    html,
  });
};
