import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

interface SubjectType {
    subject: string,
    message: string,
    their_email: string,
    their_name: string,
}

const myemail = process.env.EMAIL!
const password = process.env.PASSWORD!

const authenticate = async (req: NextRequest) => {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  
    const receivedToken = authHeader.split(' ')[1];
    if (receivedToken !== process.env.TOKEN!) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
  
    return null;
  };



export async function POST(request: NextRequest) {
    try {
        const authResponse = await authenticate(request);
        if (authResponse) return authResponse;


        const { subject, message, their_email, their_name }: SubjectType = await request.json();

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',

            port: 587,
            secure: false,
            auth: {
                user: myemail,
                pass: password
            }
        })

        const mailOption = {
            from: their_email,
            to: myemail,
            subject: subject,
            html: `
        <h3>Hello Admin, there's a message for you from ${their_name}.</h3>
        <li>${their_email}></li>
        <li > title: ${subject}</li >
        <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}