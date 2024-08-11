"use client"

import smallfontFace from "@/utils/smallfontface";


import {
    Bars3CenterLeftIcon,
    HomeIcon,
    Cog6ToothIcon,
    VideoCameraIcon,
    ChatBubbleBottomCenterIcon,
    PhoneIcon,
} from "@heroicons/react/16/solid";

import { useState } from "react";
import { usePathname } from "next/navigation";


import Link from "next/link";
import headerfontface from "@/utils/headerfontface";


const navbar = [
    { text: "Home", href: "/", icon: <HomeIcon /> },
    { text: "Contact me", href: "/contact-me", icon: <PhoneIcon /> },
    { text: "My blogs", href: "/my-blogs", icon: <ChatBubbleBottomCenterIcon /> },
    { text: "My videos", href: "/my-videos", icon: <VideoCameraIcon /> },
    { text: "Preferences", href: "/preferences", icon: <Cog6ToothIcon /> },
];

export default function Header() {

    const pathname = usePathname();
    const [showNav, setShowNav] = useState(false);


    const handleToggleNav = () => {
        setShowNav(!showNav);
    };

    const handleLinkClick =  () => {
        setShowNav(false);






    };

    return (
        <>
            <header
                className="p-3 fixed w-full  bg-white select-none shadow shadow-gray-300 "
                style={{ top: "0px" }}
            >
                <div className="flex  px-2">
                    <section className="flex items-center flex-row gap-2">
                        <Bars3CenterLeftIcon
                            className="size-5 text-slate-700 cursor-pointer "
                            onClick={handleToggleNav}
                        />
                        <label htmlFor="" className={`${headerfontface.className} text-[20px] text-neutral-700`}>Probinsyano.vlogs</label>
                       </section>
                </div>
            </header>
            {true && (
                <div
                    style={{
         
                        left: "0px",
                        opacity: showNav ? 1 : 0,
                        transition: "opacity .1s",
                        pointerEvents: showNav ? "auto" : "none",
                    }}
                    className="fixed top-[8.5vh] w-full h-full bg-black/30 bg-opacity-50 cursor-pointer"
                    onClick={handleToggleNav}
                />
            )}
            <nav
                className="fixed top-[8.5vh] bg-white px-2 border-t w-auto flex justify-center border-neutral-400 border-opacity-30"
                style={{
                    left: showNav ? "0" : "-100%",
                    height: "100vh",
                    transition: ".2s ease",
                }}
            >
                <div className="p-1">
                    <ul className="flex flex-col gap-1 mt-3 w-full">
                        {navbar.map((item) => (
                            <li
                                key={item.href}
                                className={`block rounded-lg ${pathname === item.href
                                    ? "text-blue-600 bg-blue-50"
                                    : "text-black/80"
                                    }`}
                            >
                                <Link
                                    href={item.href}
                                    prefetch={true}
                                    
                                    onClick={handleLinkClick}
                                    className={`${smallfontFace.className} flex-col flex justify-center items-center p-2 text-NavbartextSize gap-2 cursor-pointer`}
                                >
                                    <i className="size-5">{item.icon}</i>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}