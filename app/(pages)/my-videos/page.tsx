"use client"

import VideoUi from '@/components/videos_component/video_component_ui';



export default function MyVideo() {

  return (
    <div className="p-3 md:p-1 place-items-center grid ">
      <section className=" md:w-4/5 w-full ">
        

        <VideoUi />

      </section>

    </div>
  )
}

