import { BlogsTypeBody } from "@/types/BlogsTypeBody";



import smallfontFace from "@/utils/smallfontface";


export default function BlogPageBodyTut({ content_one, content_two, image_two, url, title_step_one, title_step_two }: BlogsTypeBody) {
    return (
        <main className="grid place-items-center p-2 ">
            <div className="w-full md:w-5/6  flex flex-col gap-6  p-2">

                <section className="flex flex-col md:gap-1 gap-3 ">
                    <h1 className={` text-xl text-black/80`}>{title_step_one}</h1>
                    <p className={`${smallfontFace.className} text-[15.5px] text-black/80 `}>{content_one}</p>
                </section>
                <section className="flex flex-col gap-1 ">
                    <h1 className={`text-xl text-black/80`}>{title_step_two}</h1>
                    <p className={`${smallfontFace.className} text-[15.5px] text-black/80 `}>{content_two}</p>
                </section>
                <div className="shadow shadow-neutral-300 h-1 rounded-xl"></div>

            </div>
        </main>
    );
}