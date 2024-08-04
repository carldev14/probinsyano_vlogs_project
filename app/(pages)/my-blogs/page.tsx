

import Loading from "@/components/loading";

import dynamic from "next/dynamic";


const BlogUiMain = dynamic(() => import('@/components/wrapper'), {
    loading: () => <Loading />,
    ssr: false, // Set to true for server-side rendering (optional)
});
export default function BlogsList() {
    return <BlogUiMain/>;
}