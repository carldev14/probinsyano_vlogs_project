
'use client'
import BlogUi from "@/components/blogs_component/blog_ui";






export default function BlogsList() {


    return (
        <div className="p-3 md:p-1 place-items-center grid ">

            <section className=" md:w-4/5 w-full ">
                

                <BlogUi />

            </section>
        </div>
    );
}