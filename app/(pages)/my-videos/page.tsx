import dynamic from 'next/dynamic';
import Loading from "@/components/loading";
import GreetTemplate from '@/templates/greet_template';


const VideoUI = dynamic(() => import('@/components/video_component_ui'), {
  loading: () => <Loading />,
  
  ssr: false, // Set to true for server-side rendering (optional)
});

export default function MyVideo() {
  return (
    <div className="p-3 place-items-center grid ">
      <section className="flex flex-col md:w-4/5 w-full gap-2">
        <GreetTemplate title='My Videos' descriptions='Please check out my videos and please suppoprt me' />

          <VideoUI />

      </section>

    </div>
  )
}

