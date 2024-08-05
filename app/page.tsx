
"use client"

import HomeUi from "@/components/home-ui";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <>
      <Head>
        <link rel="canonical" href={pathname} />
      </Head>
      <HomeUi />
    </>);
}
