
'use client'
import BlogUi from "@/components/blog_ui";
import GreetTemplate from "@/templates/greet_template";





export default function BlogsList() {


    return (
        <div className="p-3 md:p-1 place-items-center grid ">

            <section className="flex flex-col md:w-4/5 w-full gap-2">
                <GreetTemplate title="Read my blogs" descriptions="I upload is mostly my daily life, recipe, and others." />

                <BlogUi />

            </section>
        </div>
    );
}