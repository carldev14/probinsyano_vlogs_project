"use client"

import Image from "next/image";
import Logo from '../assets/logo.webp'
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

const links = [
    { text: "Home", href: "/" },
    { text: "About My Self", href: "/about-my-self" },
    { text: "My Videos", href: "/my-videos" }
];

export default function Header() {
    const [showNav, setShowNav] = useState(false);

    const handleToggleNav = () => {
        setShowNav(!showNav);
    };
    const hideNavbarAfterClick =() =>{
        setShowNav(false);
    }

    return (
        <header className="p-2 border-gray-300 border-b sticky bg-white select-none" style={{ top: '0px' }}>
            <div className='flex items-center mx-1 gap-3 ' >
                <Bars3BottomLeftIcon
                    className="size-7 text-sky-500 p-1 shadow shadow-neutral-400 rounded cursor-pointer"
                    onClick={handleToggleNav}
                />
                <Image src={Logo} alt="Logo" width={40} height={40} className="rounded-full p-1 shadow shadow-blue-500" ></Image>
                <label className="text-sm text-sky-600">ProbinsyanoVlogs</label>
            </div>
            {showNav && (
                <div
                    style={{
                        top: '56.5px',
                        left: '0px',
                        opacity: showNav ? 1 : 0,
                        transition: 'opacity 2s',
                    }}
                    className={`fixed w-full h-full bg-gray-300 bg-opacity-50 pointer`}
                    onClick={handleToggleNav}
                />
            )}            
            <nav
                className={'fixed bg-white p-2 '}
                style={{ top: '56.5px', left: showNav ? '0' : '-100%', width: '250px', height: '100vh', transition: '.2s' }}
            >
                <div className="p-2">
                    <h1 className="text-lg ">Routes: </h1>
                    <ul className="pl-5">
                        {links.map((link) => (
                            <li key={link.href} className=" w-full mt-1">
                                <Link href={link.href} onClick={hideNavbarAfterClick} className="block  p-1 text-sky-600 text-NavbartextSize">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}