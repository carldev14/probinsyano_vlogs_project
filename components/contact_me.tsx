"use client";

import { Poppins } from "next/font/google";
import { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import SvgComponent from "@/assets/mail";
const smallfontface = Poppins({ subsets: [], weight: '400' });

interface SubjectType {
  subject: string;
  message: string;
  their_email: string;
  their_name: string;
}

interface InputField {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function ContactUi() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [their_email, setEmail] = useState('');
  const [their_name, setName] = useState('');
  const [result, setresult] = useState('');

  const requestBody: SubjectType = {
    subject,
    message,
    their_email,
    their_name,
  };
  const inputFields: InputField[] = [
    {
      label: "Your email",
      type: "email",
      value: their_email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      label: "Your name",
      type: "text",
      value: their_name,
      onChange: (e) => setName(e.target.value),
    },
    {
      label: "The title",
      type: "text",
      value: subject,
      onChange: (e) => setSubject(e.target.value),
    },
    {
      label: "Your thoughts",
      type: "textarea",
      value: message,
      onChange: (e) => setMessage(e.target.value),
    },
  ];

  async function handle_sendMail() {
    if ([subject, message, their_email, their_name].includes("")) {
      setresult("Fill up all fields");
      return;
    }

    try {
      const response = await fetch('/api/sendmails', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          requestBody
        }),
      });
      const res = await response.json();
      setresult(res);
    } catch (error) {
      console.error(error);
      setresult("Error sending mail");
    }
  }

  return (
    <main className="flex justify-center p-6 ">
      <div className="flex flex-col gap-2 md:w-1/2 w-full">


        <h1 className=" text-xl text-black/80">Share on what's in your mind, <br /> let's get in touch</h1>




        <div className="my-1"></div>



        <div className="flex flex-col gap-4 ">
          <div className="md:flex md:justify-between flex-col w-full gap-2">
            {inputFields.map((field, index) => (
              <section key={index} className="w-full flex flex-col my-2 md:my-0 gap-2">
                <label className={`${smallfontface.className} text-black text-xs`}>{field.label}</label>
                {/*Logic. If field.type found called textarea, render the content below. The textarea. While if not render Input section*/}
                {field.type === "textarea" ? (
                  <textarea
                    value={field.value}
                    onChange={field.onChange}
                    className={`${smallfontface.className} p-2  text-xs   border-black/50 border rounded outline-none `}
                  />
                ) : (
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={field.onChange}

                    className={`${smallfontface.className} p-2  text-xs   border-black/50 border rounded outline-none `}
                  />
                )}
              </section>
            ))}
          </div>


          <button onClick={handle_sendMail} className="p-2 w-full md:w-44 bg-blue-500 text-white text-xs rounded">Finish, send now</button>

        </div>

        <p className={`${smallfontface.className} text-sm`}>Results: {result}</p>
      </div>
    </main>
  );
}