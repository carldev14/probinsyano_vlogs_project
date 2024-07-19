"use client"
import Image from "next/image";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import Loading from "@/components/loading";

const VideoUI = dynamic(() => import('@/components/video_component_ui'), {
  loading: () => <Loading/>,
  ssr: false, // Set to true if you want to load the component on the server-side
});

export default function MyVideo() {
  return (
   <Suspense>
     <VideoUI/>
   </Suspense>
  );
}
