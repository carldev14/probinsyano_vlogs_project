import Image from "next/image";
import logo from '@/assets/logo.webp'

import Link from "next/link";
import { Poppins } from "next/font/google";
const smallFontFace = Poppins({ subsets: [], weight: '400' });
export default function Greetings() {
    return (
        <main className="flex justify-center items-center h-auto flex-col">
     
            <section className="flex flex-col items-center ">
                <Image src={logo} alt="Intro_logo" width={150} height={150} className="rounded-full p-2 shadow shadow-neutral-400" />
                <br />
                <h1 className=" text-xl text-center md:text-2xl tracking-widest text-black/80">Probinsyano Vlogs</h1>
                <p className={`text-sm md:text-base text-black/60  ${smallFontFace.className}`}  >Welcome to my website!</p>
            </section>
            <br />
            <section className="flex  items-center gap-3 flex-wrap justify-center">
                <Link href={'/my-videos'} className="p-2 rounded-lg  text-xs text-white bg-blue-500">
                   My Videos
                </Link>
                <Link href={'/my-blogs'} className="p-2 rounded-lg  text-xs text-white bg-blue-500">
                    My Blog
                </Link>
                <a href="https://www.facebook.com/SipocotMarlon" target="_blank" className="p-2 rounded-lg  text-xs text-white bg-blue-500">
                    My Page
                </a>
            </section>
        </main>
    );
}