import dynamic from 'next/dynamic';
import Loading from "@/components/loading";

const VideoUI = dynamic(() => import('@/components/video_component_ui'), {
  loading: () => <Loading/>,
  ssr: false, // Set to true for server-side rendering (optional)
});

export default function MyVideo() {
  return <VideoUI />;
}

