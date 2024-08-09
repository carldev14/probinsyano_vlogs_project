"use client";

import { useMutation } from "@tanstack/react-query";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";


const smallfontface = Poppins({ subsets: [], weight: '400' });

interface RequestBodyType {
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

const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function ContactUi() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [their_email, setEmail] = useState('');
  const [their_name, setName] = useState('');
  const [response, setresponse] = useState('');




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

  const validateEmail = emailregex.test(their_email)

  const { mutate, error, isSuccess } = useMutation({
    mutationKey: ["contact-us"],
    mutationFn: async () => {
      const response = await fetch('/api/sendmails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.TOKEN!}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subject,
          message,
          their_email,
          their_name,
        } as RequestBodyType),

      })
      const data = await response.json();
      setresponse(data.message)
    }
  })





  async function handle_sendMail() {
    setresponse("Please wait for reponse...")
    if (!validateEmail) {
      setresponse("Your email is not valid")
      return;
    }


    if ([subject, message, their_email, their_name].includes("")) {
      setresponse("Fill up all fields");
      return;
    }




    const resetFormFields = () => {
      setTimeout(() => {
        setresponse("")
      }, 1000);
      setSubject("");
      setMessage("");
      setEmail("");
      setName("");
    };

    mutate()
    if (isSuccess) resetFormFields();
    
  }

  return (
    <main className="flex justify-center p-6 ">
      <div className="flex flex-col gap-3 md:gap-5 md:w-1/2 w-full">


        <h1 className=" text-lg md:text-xl text-black/80">Share on what's in your mind, <br /> let's get in touch</h1>








        <div className="flex flex-col gap-4 ">
          <div className="md:flex md:justify-between flex-col w-full gap-2">
            {inputFields.map((field, index) => (
              <section key={index} className="w-full flex flex-col my-2 md:my-0 gap-2">
                <label className={`${smallfontface.className} text-black text-xs mx-1`}>{field.label}</label>
                {/*Logic. If field.type found called textarea, render the content below. The textarea. While if not render Input section*/}
                {field.type === "textarea" ? (
                  <textarea
                    value={field.value}
                    onChange={field.onChange}
                    className={`${smallfontface.className} p-2  text-xs   bg-slate-100 rounded-lg outline-none `}
                  />
                ) : (
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={field.onChange}

                    className={`${smallfontface.className} p-2  text-xs   bg-slate-100 rounded-lg outline-none `}
                  />
                )}
              </section>
            ))}
          </div>


          <button onClick={handle_sendMail} className="p-2 w-full md:w-44 bg-blue-500 text-white text-xs rounded-lg">Finish, send now</button>

        </div>

        <p className={`${smallfontface.className} text-xs`}>Response: *{response}*</p>
      </div>
    </main>
  );
}