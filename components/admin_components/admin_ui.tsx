"use client"
import React, { useState } from 'react';
import { IdentificationIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import smallfontFace from '@/utils/smallfontface';
import { useMutation } from '@tanstack/react-query';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function AdminUi() {
    //useState
    const [number_id, setNumber_id] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState('');
    //sessions

    //Define method here
    const router = useRouter();


    //Login method logic
    const { mutate: login_admin, error } = useMutation({
        mutationKey: ["admin_key"],
        mutationFn: async () => {
            const response = await signIn("credentials", {
                number_id,
                password,
                redirect: false,
            })

            if (response?.ok) {
                setResult("Welcome back Admin!")
                router.push('/protected-features')
            } else {
                setResult("Incorrect credentials, please check your inputs")
            }

        }
    })

    if (error) {
        console.log(error)
    }

    //trigger function button
    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        //Initilize it here
        login_admin();
    }



    return (
        <main className='grid place-items-center h-[85vh] p-2'>
            <div className='p-2 w-full md:w-[34%]'>
                <form onSubmit={handleLogin} className='flex flex-col gap-3 '>
                    <section>
                        <p className={`${smallfontFace.className} text-sm text-black/80`}>This is only for admin user. If you are not, kindly switch to another page. Thank you for your understanding.</p>
                    </section>
                    <section className='flex row items-center text-black/80 border-b'>
                        <IdentificationIcon className='size-6 ' />
                        <input type="number" className={`p-2 outline-none text-sm w-full 
                        ${smallfontFace.className}`}
                            placeholder='Enter your ID'
                            value={number_id}
                            onChange={(e) => setNumber_id(e.target.value)} />
                    </section>

                    <section className='flex row items-center text-black/80 border-b'>
                        <LockClosedIcon className='size-6 ' />
                        <input type="password" className={`p-2 outline-none text-sm w-full 
                        ${smallfontFace.className}`}
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </section>



                    <section>
                        <button className='p-2 bg-blue-500 text-xs rounded-md text-white w-full'>Login</button>
                    </section>
                    <section>
                        <label className={`${smallfontFace.className} text-sm text-black/80`}>{result}</label>
                    </section>
                </form>
            </div>
        </main>
    );
}
