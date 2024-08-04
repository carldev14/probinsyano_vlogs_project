"use client"

import smallfontFace from "@/utils/smallfontface";
import Image from "next/image";

import {
    Bars3CenterLeftIcon,
    HomeIcon,
    Cog6ToothIcon,
    VideoCameraIcon,
    ChatBubbleBottomCenterIcon,
    PhoneIcon,
} from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.svg";
import { PrefetchKind } from "next/dist/client/components/router-reducer/router-reducer-types";
import Link from "next/link";

const navbar = [
    { text: "Home", href: "/", icon: <HomeIcon /> },
    { text: "Contact me", href: "/contact-me", icon: <PhoneIcon /> },
    { text: "My blogs", href: "/my-blogs", icon: <ChatBubbleBottomCenterIcon /> },
    { text: "My videos", href: "/my-videos", icon: <VideoCameraIcon /> },
    { text: "Preferences", href: "/preferences", icon: <Cog6ToothIcon /> },
];

export default function Header() {
    const [rendered_d, setRender] = useState([])
    const pathname = usePathname();
    const [showNav, setShowNav] = useState(false);
    const router = useRouter();

    const handleToggleNav = () => {
        setShowNav(!showNav);
    };

    const handleLinkClick =  () => {
        setShowNav(false);






    };

    return (
        <>
            <header
                className="p-2 px-4 bg-white select-none shadow shadow-gray-100"
                style={{ top: "0px" }}
            >
                <div className="flex justify-between items-center">
                    <section className="flex items-center">
                        <Bars3CenterLeftIcon
                            className="size-5 text-blue-500 cursor-pointer mb-1"
                            onClick={handleToggleNav}
                        />
                        <Image alt="logo" src={logo} className="w-full h-[35px]" />
                    </section>
                </div>
            </header>
            {showNav && (
                <div
                    style={{
                        left: "0px",
                        opacity: showNav ? 1 : 0,
                        transition: "opacity .2s",
                        pointerEvents: showNav ? "auto" : "none",
                    }}
                    className="fixed w-full h-full bg-black/30 bg-opacity-50 cursor-pointer"
                    onClick={handleToggleNav}
                />
            )}
            <nav
                className="fixed bg-white px-2 border-t w-auto flex justify-center border-neutral-400 border-opacity-30"
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