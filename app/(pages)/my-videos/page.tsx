"use client"
import GreetTemplate from '@/templates/greet_template';
import VideoUi from '@/components/video_component_ui';
import Head from "next/head";
import { usePathname } from "next/navigation";


export default function MyVideo() {
  const pathname = usePathname();
  return (
    <div className="p-3 place-items-center grid ">
      <Head>
        <link rel="canonical" href={pathname} />
      </Head>
      <section className="flex flex-col md:w-4/5 w-full gap-2">
        <GreetTemplate title='My Videos' descriptions='Please check out my videos and please suppoprt me' />

        <VideoUi />

      </section>

    </div>
  )
}

