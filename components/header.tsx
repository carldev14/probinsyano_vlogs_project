"use client"

import { Poppins } from "next/font/google";
const navlinksfontface = Poppins({ subsets: [], weight: '400' });
import Image from "next/image";
import Logo from '../assets/logo.webp'
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, Cog6ToothIcon, VideoCameraIcon, ChatBubbleBottomCenterIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

const navbar = [
    { text: "Home", href: "/", icon: <HomeIcon /> },
    { text: "Contact Me", href: "/contact-me", icon: < PhoneIcon /> },
    { text: "My blogs", href: "/my-blogs", icon: <ChatBubbleBottomCenterIcon /> },
    { text: "My Videos", href: "/my-videos", icon: <VideoCameraIcon /> },
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

        <header className="p-2   sticky bg-white select-none shadow shadow-gray-200" style={{ top: '0px' }}>
            <div className='flex  mx-1  justify-between items-center' >
                <section className="flex items-center gap-2">

                    {
                        showNav ? (
                            <ChevronLeftIcon
                                className="size-7 text-blue-500 p-1 shadow shadow-neutral-400 rounded-xl cursor-pointer"
                                onClick={handleToggleNav}
                            />
                        ) : (
                            <ChevronRightIcon
                                className="size-7 text-blue-500 p-1 shadow shadow-neutral-400 rounded-xl cursor-pointer"
                                onClick={handleToggleNav}
                            />
                        )
                    }
                  <label className=" text-xs shadow-sm p-2 text-blue-500 rounded-xl shadow-neutral-400">Probinsyano Vlogs</label>

                </section>
                <section className='p-1'>






                </section>
            </div>
            {true && (
                <div
                    style={{
                        top: '49px',
                        left: '0px',
                        opacity: showNav ? 1 : 0,
                        transition: 'opacity .2s', // specify the property and duration
                        pointerEvents: showNav ? 'auto' : 'none', // disable click events when hidden
                    }}
                    className={`fixed w-full h-full bg-black/30 bg-opacity-50 cursor-pointer`}
                    onClick={handleToggleNav}
                />
            )}
            <nav
                className={'fixed bg-white px-2 '}
                style={{ top: '49px', left: showNav ? '0' : '-100%', width: '200px', height: '100vh', transition: '.2s ease' }}
            >
                <div className="p-1 ">

                    <ul className=" ">
                        {navbar.map((item) => (
                            <li key={item.href} className={`m-1  block rounded-lg ${pathname === item.href ? 'text-blue-600 bg-blue-50 ' : 'text-black/80'}`}>
                                <Link prefetch={false}  href={item.href}  onClick={handleLinkClick}
                                    className={`${navlinksfontface.className} flex items-center  p-2 text-NavbartextSize gap-2 
                                        `}>
                                    <i className="size-5">{item.icon}</i>{item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}