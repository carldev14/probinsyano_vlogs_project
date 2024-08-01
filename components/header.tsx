"use client"

import smallfontFace from "@/utils/smallfontface";
import Image from "next/image";
import Logo from '../assets/logo.webp'
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, Cog6ToothIcon, VideoCameraIcon, ChatBubbleBottomCenterIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import logo from '@/assets/logo.svg'
const navbar = [
    { text: "Home", href: "/", icon: <HomeIcon /> },
    { text: "Contact me", href: "/contact-me", icon: < PhoneIcon /> },
    { text: "My blogs", href: "/my-blogs", icon: <ChatBubbleBottomCenterIcon /> },
    { text: "My videos", href: "/my-videos", icon: <VideoCameraIcon /> },
    { text: "Preferences", href: "/preferences", icon: < Cog6ToothIcon /> }

];


export default function Header() {

    const pathname = usePathname();
    const [showNav, setShowNav] = useState(false);

    const handleToggleNav = () => {
        setShowNav(!showNav);
    };

    const handleLinkClick = () => {
        setShowNav(false)
    }

    return (

        <>
            <header className="p-2   bg-white select-none shadow shadow-gray-200" style={{ top: '0px' }}>
                <div className='flex  mx-1  justify-between items-center' >
                    <section className="flex items-center h-[50px]" >

                        {
                            showNav ? (
                                <ChevronLeftIcon
                                    className="size-8 text-blue-500 p-1 shadow shadow-neutral-400 rounded-xl cursor-pointer"
                                    onClick={handleToggleNav}
                                />
                            ) : (
                                <ChevronRightIcon
                                    className="size-8 text-blue-500 p-1 shadow shadow-neutral-400 rounded-xl cursor-pointer"
                                    onClick={handleToggleNav}
                                />
                            )
                        }
                       <Image alt="logo" src={logo} className="w-full h-[35px]"/>

                    </section>

                </div>


            </header>
            {true && (
                <div
                    style={{
                        
                        left: '0px',
                        opacity: showNav ? 1 : 0,
                        transition: 'opacity .2s', // specify the property and duration
                        pointerEvents: showNav ? 'auto' : 'none', // disable click events when hidden
                    }}
                    className={` fixed w-full h-full bg-black/30 bg-opacity-50 cursor-pointer`}
                    onClick={handleToggleNav}
                />
            )}
            <nav
                className={'fixed bg-white px-2 border-t w-auto flex justify-center border-neutral-400 border-opacity-30'}
                style={{ left: showNav ? '0' : '-100%', height: '100vh', transition: '.2s ease' }}
            >   
                <div className="p-1 ">

                    <ul className=" flex flex-col gap-1 mt-3 w-full">
                        {navbar.map((item) => (
                            <li key={item.href} className={` block  rounded-lg ${pathname === item.href ? 'text-blue-600 bg-blue-50 ' : 'text-black/80'}`}>
                                <Link prefetch={false} href={item.href} onClick={handleLinkClick}
                                    className={`${smallfontFace.className} flex-col flex justify-center items-center  p-2 text-NavbartextSize gap-2 
                                            `}>
                                    <i className="size-5">{item.icon}</i>{item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}