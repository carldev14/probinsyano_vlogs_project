import { NextRequest } from 'next/server';
import NodeMailer from 'nodemailer'

const email = process.env.EMAIL!
const password = process.env.PASSWORD!




export const transporter = NodeMailer.createTransport({
    service: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: email,
        pass: password
    },
});



export default function SENDMAIL(options:any) {
    return new Promise((resolve, reject) => {
      transporter.sendMail(options, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
  }