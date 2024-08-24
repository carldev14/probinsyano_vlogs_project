"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Bars3CenterLeftIcon,
    HomeIcon,
    ArrowLeftStartOnRectangleIcon,
    VideoCameraIcon,
    ChatBubbleBottomCenterIcon,
    PhoneIcon,
    Cog8ToothIcon,
} from "@heroicons/react/16/solid";
import headerfontface from "@/utils/headerfontface";
import smallfontFace from "@/utils/smallfontface";

const NAV_ITEMS = [
    { text: "Home", href: "/", icon: <HomeIcon /> },
    { text: "Contact me", href: "/contact-me", icon: <PhoneIcon /> },
    { text: "My blogs", href: "/my-blogs", icon: <ChatBubbleBottomCenterIcon /> },
    { text: "My videos", href: "/my-videos", icon: <VideoCameraIcon /> },
];

const AuthLinks = ({ isAuth, handleLinkClick }: { isAuth: boolean; handleLinkClick: () => void; }) => (
    <>
        {isAuth ? (
            <>
                <NavItem
                    onClick={() => signOut()}
                    text="Sign out"
                    icon={<ArrowLeftStartOnRectangleIcon className="size-5" />}
                    bgColor="bg-red-100"
                    textColor="text-red-600"
                />
                <NavItem
                    href="/protected-features"
                    text="Features"
                    icon={<Cog8ToothIcon className="size-5" />}
                    bgColor="bg-blue-100"
                    textColor="text-blue-600"
                    onClick={handleLinkClick}
                />
            </>
        ) : (
            <NavItem
                href="/admin"
                text="Admin"
                icon={<ArrowLeftStartOnRectangleIcon className="size-5" />}
                bgColor="bg-blue-50"
                textColor="text-blue-600"
                onClick={handleLinkClick}
            />
        )}
    </>
);

const NavItem = ({
    href,
    onClick,
    text,
    icon,
    bgColor,
    textColor
}: {
    href?: string;
    onClick?: () => void;
    text: string;
    icon: React.ReactNode;
    bgColor: string;
    textColor: string;
}) => (
    <section className={`rounded-md block p-2 ${bgColor} ${textColor}`}>
        {href ? (
            <Link
                href={href}
                prefetch
                className={`${smallfontFace.className} text-xs gap-2 flex flex-col justify-center items-center w-full`}
                onClick={onClick}
            >
                {icon}
                {text}
            </Link>
        ) : (
            <button
                className={`${smallfontFace.className} text-xs gap-2 flex flex-col justify-center items-center w-full`}
                onClick={onClick}
            >
                {icon}
                {text}
            </button>
        )}
    </section>
);

export default function Header() {
    const [showNav, setShowNav] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const pathname = usePathname();
    const { status } = useSession();

    useEffect(() => {
        setIsAuth(status === "authenticated");
    }, [status]);

    const handleToggleNav = () => setShowNav(!showNav);
    const handleLinkClick = () => setShowNav(false);

    return (
        <div className="relative select-none">
            <header className="shadow p-3 flex justify-between items-center bg-white z-50 fixed top-0 left-0 w-full">
                <div className="flex px-2">
                    <section className="flex items-center gap-2">
                        <Bars3CenterLeftIcon
                            className="size-5 text-slate-700 cursor-pointer"
                            onClick={handleToggleNav}
                        />
                        <label className={`${headerfontface.className} text-[20px] text-neutral-700`}>
                            Probinsyano.vlogs
                        </label>
                    </section>
                </div>
            </header>
            {showNav && (
                <div
                    className="fixed top-[54px] w-full h-full bg-black/30 bg-opacity-50 cursor-pointer"
                    style={{
                        opacity: showNav ? 1 : 0,
                        pointerEvents: showNav ? "auto" : "none",
                        transition: "opacity .2s"
                    }}
                    onClick={handleToggleNav}
                />
            )}
            <nav
                className="fixed top-[54px] bg-white px-2 border-t w-auto flex justify-center border-neutral-400 border-opacity-30"
                style={{
                    left: showNav ? "0" : "-100%",
                    height: "100vh",
                    transition: ".3s ease"
                }}
            >
                <div className="p-1">
                    <ul className="flex flex-col gap-2 mt-3 w-full">
                        {NAV_ITEMS.map((item) => (
                            <li
                                key={item.href}
                                className={`block rounded-lg ${pathname === item.href ? "text-blue-600 bg-blue-50" : "text-black/80"}`}
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
                        <AuthLinks isAuth={isAuth} handleLinkClick={handleLinkClick} />
                    </ul>
                </div>
            </nav>
        </div>
    );
}
