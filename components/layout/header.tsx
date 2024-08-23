"use client"

import smallfontFace from "@/utils/smallfontface";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import {
    Bars3CenterLeftIcon,
    HomeIcon,
    ArrowLeftStartOnRectangleIcon,
    VideoCameraIcon,
    ChatBubbleBottomCenterIcon,
    PhoneIcon,
} from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import headerfontface from "@/utils/headerfontface";

const navbar = [
    { text: "Home", href: "/", icon: <HomeIcon /> },
    { text: "Contact me", href: "/contact-me", icon: <PhoneIcon /> },
    { text: "My blogs", href: "/my-blogs", icon: <ChatBubbleBottomCenterIcon /> },
    { text: "My videos", href: "/my-videos", icon: <VideoCameraIcon /> },
];

export default function Header() {
    const [showNav, setShowNav] = useState(false);
    const [isAuth, setisAuth] = useState(false);
    const pathname = usePathname();
    const { status } = useSession();

    useEffect(() => {
        // Handle authentication status change
        // You can perform side effects or additional logic here if needed
        if (status === "authenticated") {
            setisAuth(true)
        } else {
            setisAuth(false)
        }
    }, [status]);

    const handleToggleNav = () => {
        setShowNav(!showNav);
    };

    const handleLinkClick = () => {
        setShowNav(false);
    };

    return (
        <div className="relative select-none">
            <header className="shadow p-3 flex justify-between items-center bg-white z-50 fixed top-0 left-0 w-full">
                <div className="flex px-2">
                    <section className="flex items-center flex-row gap-2">
                        <Bars3CenterLeftIcon
                            className="size-5 text-slate-700 cursor-pointer"
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
                        transition: "opacity .2s",
                        pointerEvents: showNav ? "auto" : "none",
                    }}
                    className="fixed top-[54px] w-full h-full bg-black/30 bg-opacity-50 cursor-pointer"
                    onClick={handleToggleNav}
                />
            )}
            <nav
                className="fixed top-[54px] bg-white px-2 border-t w-auto flex justify-center border-neutral-400 border-opacity-30"
                style={{
                    left: showNav ? "0" : "-100%",
                    height: "100vh",
                    transition: ".3s ease",
                }}
            >
                <div className="p-1">
                    <ul className="flex flex-col gap-2 mt-3 w-full ">
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


                        {isAuth ? (
                            <section className="rounded-md block p-2 bg-red-100 text-red-600">

                                <button onClick={() => signOut()} className={`${smallfontFace.className} gap-2 flex flex-col justify-center items-center  text-xs w-full `}>
                                    <ArrowLeftStartOnRectangleIcon className="size-5" />
                                    Sign out
                                </button>
                            </section>
                        ) : (
                            <section className="rounded-md block p-2 bg-blue-50 text-blue-600  ">

                                <Link href={'/admin'}
                                    prefetch
                                    className={`${smallfontFace.className} text-xs  gap-2 flex flex-col justify-center items-center w-full`} onClick={handleLinkClick}>
                                    <ArrowLeftStartOnRectangleIcon className="size-5" />
                                    Admin
                                </Link>
                            </section>

                        )}



                    </ul>
                </div>
            </nav>
        </div>
    );
}
