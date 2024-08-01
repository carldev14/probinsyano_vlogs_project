"use client"
import { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, PhoneIcon, ChatBubbleBottomCenterIcon, VideoCameraIcon, Cog6ToothIcon } from "@heroicons/react/16/solid";
import navlinksfontface from '../utils/smallfontface';

const navbar = [
  { text: "Home", href: "/", icon: <HomeIcon /> },
  { text: "Contact Me", href: "/contact-me", icon: <PhoneIcon /> },
  { text: "My blogs", href: "/my-blogs", icon: <ChatBubbleBottomCenterIcon /> },
  { text: "My Videos", href: "/my-videos", icon: <VideoCameraIcon /> },
  { text: "Preferences", href: "/preferences", icon: <Cog6ToothIcon /> }
];

const Nav = () => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  const handleLinkClick = () => {
    setShowNav(false)
  }

  return (
    <nav
      className={'fixed bg-white px-2 '}
      style={{ top: '10.5%', left: showNav ? '0' : '-100%', width: '200px', height: '100vh', transition: '.2s ease' }}
    >
      <div className="p-1 ">
        <ul className=" ">
          {navbar.map((item) => (
            <li key={item.href} className={`m-1  block rounded-lg ${pathname === item.href ? 'text-blue-600 bg-blue-50 ' : 'text-black/80'}`}>
              <Link prefetch={false} href={item.href} onClick={handleLinkClick}
                className={`${navlinksfontface.className} flex items-center  p-2 text-NavbartextSize gap-2 
                                        `}>
                <i className="size-5">{item.icon}</i>{item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {true && (
        <div
          style={{
            top: '11%',
            left: '0px',
            opacity: showNav ? 1 : 0,
            transition: 'opacity .2s', // specify the property and duration
            pointerEvents: showNav ? 'auto' : 'none', // disable click events when hidden
          }}
          className={`fixed w-full h-full bg-black/30 bg-opacity-50 cursor-pointer`}
          onClick={handleToggleNav}
        />
      )}
      <div className="flex items-center gap-1">
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
      </div>
    </nav>
  );
};

export default Nav;