
'use client'
import BlogUi from "@/components/blog_ui";
import GreetTemplate from "@/templates/greet_template";
import Head from "next/head";
import { usePathname } from "next/navigation";



export default function BlogsList() {
    const pathname = usePathname();

    return (
        <div className="p-3 place-items-center grid ">
            <Head>
                <link rel="canonical" href={pathname} />
            </Head>
            <section className="flex flex-col md:w-4/5 w-full gap-2">
                <GreetTemplate title="Read my blogs" descriptions="I upload is mostly my daily life, recipe, and others." />

                <BlogUi />

            </section>
        </div>
    );
}