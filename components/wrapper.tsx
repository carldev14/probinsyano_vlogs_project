import GreetTemplate from "@/templates/greet_template";
import BlogUi from "./blog_ui";
export default function BlogWrapper() {
    return (
        <div className="p-3 place-items-center grid ">
            <section className="flex flex-col md:w-4/5 w-full gap-2">
                <GreetTemplate title="Read my blogs" descriptions="I upload is mostly my daily life, recipe, and others." />
                <BlogUi />

            </section>
        </div>


    )
}