

import Loading from "@/components/loading";

import dynamic from "next/dynamic";
import GreetTemplate from "@/templates/greet_template";
import Sample from "@/components/sample";


const BlogUiMain = dynamic(() => import('@/components/blog_ui'), {
    loading: () => <Loading />,
    ssr: false, // Set to true for server-side rendering (optional)
});
export default function BlogsList() {
    return (
        <div className="p-3 place-items-center grid ">
            <section className="flex flex-col md:w-4/5 w-full gap-2">
                <GreetTemplate title="Read my blogs" descriptions="I upload is mostly my daily life, recipe, and others." />

                {/* <BlogUiMain /> */}
                <Sample/>
            </section>
        </div>
    );
}