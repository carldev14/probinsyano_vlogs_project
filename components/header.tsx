"use client"

import Image from "next/image";
import Logo from '../assets/logo.webp'
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, Cog6ToothIcon, VideoCameraIcon, QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

const navbar = [
    { text: "Home", href: "/", icon: <HomeIcon /> },
    { text: "About My Self", href: "/about-my-self", icon: <VideoCameraIcon /> },
    { text: "My Videos", href: "/my-videos", icon: <QuestionMarkCircleIcon /> },
    { text: "Preferences", href: "/preferences", icon: < Cog6ToothIcon /> }
];


export default function Header() {
    const pathname = usePathname();
    const [showNav, setShowNav] = useState(false);

    const handleToggleNav = () => {
        setShowNav(!showNav);
    };
    const hideNavbarAfterClick = () => {
        setShowNav(false);
    }

    return (
        <header className="p-2  border-gray-300 border-b sticky bg-white select-none" style={{ top: '0px' }}>
            <div className='flex items-center mx-1 gap-3 ' >
                {
                    showNav ? (
                        <ChevronLeftIcon
                            className="size-7 text-blue-500 p-1 shadow shadow-neutral-400 rounded-lg cursor-pointer"
                            onClick={handleToggleNav}
                        />
                    ) : (
                        <ChevronRightIcon
                            className="size-7 text-blue-500 p-1 shadow shadow-neutral-400 rounded-lg cursor-pointer"
                            onClick={handleToggleNav}
                        />
                    )
                }
                <Image src={Logo} alt="Logo" width={35} height={35} className="rounded-2xl p-1 shadow shadow-neutral-400" ></Image>
                <label className="text-logoSize text-blue-600 ">Probinsyano Vlogs</label>
            </div>
            {true && (
                <div
                    style={{
                        top: '52px',
                        left: '0px',
                        opacity: showNav ? 1 : 0,
                        transition: 'opacity .2s', // specify the property and duration
                        pointerEvents: showNav ? 'auto' : 'none', // disable click events when hidden
                    }}
                    className={`fixed w-full h-full bg-black/30 bg-opacity-50 pointer`}
                    onClick={handleToggleNav}
                />
            )}
            <nav
                className={'fixed bg-white px-2 '}
                style={{ top: '52.1px', left: showNav ? '0' : '-100%', width: '200px', height: '100vh', transition: '.2s ease' }}
            >
                <div className="p-1 ">

                    <ul className=" ">
                        {navbar.map((item) => (
                            <li key={item.href} className={`m-1  block rounded-lg ${pathname === item.href ? 'text-blue-600 bg-blue-50 ' : 'text-black/80'}`}>
                                <Link href={item.href} onClick={hideNavbarAfterClick}
                                    className={`flex items-center  p-2 text-NavbartextSize gap-2 
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