import Image from "next/image";
import logo from '@/assets/logo.webp'

import Link from "next/link";
import smallfontFace from "@/utils/smallfontface";

interface LinksType {
  url: string;
  name: string;
  type: string;
}

const linksData: LinksType[] = [
  {
    name: "My videos",
    url: "/my-videos",
    type: 'links'
  },
  {
    name: "My blogs",
    url: "/my-blogs",
    type: 'links'
  },
  {
    name: "My Pages",
    url: "https://www.facebook.com/SipocotMarlon",
    type: "fbpage",
  }
]

export default function Greetings() {
  return (
    <main className="flex justify-center items-center h-auto flex-col">
      <section className="flex flex-col items-center ">
        <Image src={logo} alt="Intro_logo" width={150} height={150} className="rounded-full p-2 shadow shadow-neutral-400" />
        <div className="my-3"></div>
        <div ></div>
        <h1 className="text-xl text-center md:text-2xl tracking-widest text-black/80">Probinsyano Vlogs</h1>
        <p className={`text-sm md:text-base text-black/70  ${smallfontFace.className}`}>Welcome to my website!</p>
      </section>
      <div className="my-2"></div>
      <section className="flex items-center gap-3 flex-wrap justify-center">
        {linksData.map((item) => {
          if (item.type === "fbpage") {
            return (
              <a href={item.url} target="_blank" className="p-[10px] rounded-full  text-xs text-white bg-blue-500">
                {item.name}
              </a>
            )
          } else {
            return (
              <Link href={item.url} className="p-[10px] rounded-full  text-xs text-white bg-blue-500">
                {item.name}
              </Link>
            )
          }
        })}
      </section>
    </main>
  );
}