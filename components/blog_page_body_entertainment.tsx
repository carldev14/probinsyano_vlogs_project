import { BlogsTypeBody } from "@/types/BlogsTypeBody";
import smallfontFace from "@/utils/smallfontface";
export default function BlogPageEntertainment({ content_one, content_two, image_two, url, title_step_three, content, title_step_one, title_step_two, title_step_four, title_step_five, title_step_six, content_three, content_four, content_five, content_six }: BlogsTypeBody) {

    const sections = [
        {
            id: 1, content: content_one, title: title_step_one
        },
        {
            id: 2, content: content_two, title: title_step_two
        }
    ]

    return (
        <main className=" grid place-items-center px-2 ">
            <div className="w-full md:w-5/6  flex flex-col gap-5  p-3">
                {sections.map((item) => (
                    <section className="flex flex-col gap-2  ">
                        <h1 className={` text-lg text-black/85`}>{item.title}</h1>
                        <p className={`${smallfontFace.className} text-base text-black/90 `}>{item.content}</p>
                    </section>
                ))}
            </div>
        </main>
    );
}