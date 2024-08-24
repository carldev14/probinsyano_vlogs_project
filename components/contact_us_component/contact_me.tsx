"use client";

import usePostApi from "@/custom_hooks/useApi";
import headerPoppins from "@/utils/italicPoppins";
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

  const { post } = usePostApi();



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

  //Post mutation
  const { mutate, error, isSuccess } = post('/api/sendmails', {
    subject,
    message,
    their_email,
    their_name,
  } as RequestBodyType);





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
        setSubject("");
        setMessage("");
        setEmail("");
        setName("");
      }, 1000);

    };






    mutate()
    if (isSuccess) {
      setresponse("Sent succesfully");
      resetFormFields();
    }

  }

  return (
    <main className="flex justify-center p-6 ">
      <div className="flex flex-col gap-3 md:gap-5 md:w-1/2 w-full">


        <h1 className=" text-lg md:text-xl text-black/80">Share on what's in your mind, <br /> let's get in touch</h1>








        <form className="flex flex-col gap-4 " onSubmit={handle_sendMail}>
          <section className="flex flex-col w-full gap-2" >
            {inputFields.map((field, index) => (
              <section key={index} className="w-full flex flex-col my-2 md:my-0 gap-2">
                <label className={`${headerPoppins.className} text-black/70 text-xs `}>{field.label}</label>
                {/*Logic. If field.type found called textarea, render the content below. The textarea. While if not render Input section*/}
                {field.type === "textarea" ? (
                  <textarea
                    value={field.value}
                    onChange={field.onChange}
                    className={`${smallfontface.className} p-2  text-[13.5px] text-black/80   border border-black/20 rounded-md outline-none px-2`}
                  />
                ) : (
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={field.onChange}

                    className={`${smallfontface.className} p-2  text-[13.5px] text-black/80   border border-black/20 rounded-md outline-none `}
                  />
                )}
              </section>
            ))}
          </section>


          <button type="submit" className="p-2 w-full md:w-44 bg-blue-500 text-white text-[13.2px] rounded-md">Finish, send now</button>

        </form>

        <p className={`${smallfontface.className} text-xs`}>{response}</p>
      </div>
    </main>
  );
}