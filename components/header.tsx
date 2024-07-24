"use client"

import Image from "next/image";
import Logo from '../assets/logo.webp'
import { Bars3BottomLeftIcon, HomeIcon, VideoCameraIcon, QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { use, useState } from "react";
import { usePathname } from 'next/navigation';



const navbar = [
    { text: "Home", href: "/", icon: <HomeIcon /> },
    { text: "About My Self", href: "/about-my-self", icon: <VideoCameraIcon /> },
    { text: "My Videos", href: "/my-videos", icon: <QuestionMarkCircleIcon /> }
];

export default function Header() {
    const pathname = usePathname();
    if (pathname === '/') {
        console.log('Home')

    } else if (pathname === '/about-my-self') {

    } else if (pathname === '/my-videos') {

    } else {
        console.log('You are lost')
    }

    const [showNav, setShowNav] = useState(false);

    const handleToggleNav = () => {
        setShowNav(!showNav);
    };
    const hideNavbarAfterClick = () => {
        setShowNav(false);
    }

    return (
        <header className="p-2 border-gray-300 border-b sticky bg-white select-none" style={{ top: '0px' }}>
            <div className='flex items-center mx-1 gap-3 ' >
                <Bars3BottomLeftIcon
                    className="size-7 text-black/85 p-1 shadow shadow-neutral-400 rounded cursor-pointer"
                    onClick={handleToggleNav}
                />
                <Image src={Logo} alt="Logo" width={35} height={35} className="rounded-2xl p-1 shadow shadow-neutral-400" ></Image>
                <label className="text-sm text-black/85 tracking-wider">ProbinsyanoVlogs</label>
            </div>
            {showNav && (
                <div
                    style={{
                        top: '52px',
                        left: '0px',
                        opacity: showNav ? 1 : 0,
                        transition: 'opacity 2s',
                    }}
                    className={`fixed w-full h-full bg-black/30 bg-opacity-50 pointer`}
                    onClick={handleToggleNav}
                />
            )}
            <nav
                className={'fixed bg-white p-2 '}
                style={{ top: '52.1px', left: showNav ? '0' : '-100%', width: '200px', height: '100vh', transition: '.2s' }}
            >
                <div className="p-2 ">

                    <ul className=" ">
                        {navbar.map((item) => (
                            <li key={item.href} className="m-1  block ">
                                <Link href={item.href} onClick={hideNavbarAfterClick} className=" flex items-center py-2 px-1 text-black/80 text-NavbartextSize gap-2"><i className="size-5">{item.icon}</i>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}