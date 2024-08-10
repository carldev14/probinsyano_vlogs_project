import { BlogsTypeBody } from "@/types/BlogsTypeBody";



import smallfontFace from "@/utils/smallfontface";
import ImageComponent from "./image_component";


export default function BlogPageBodyTut({ content_one, content_two, image_two, url, title_step_three, title_step_one, title_step_two }: BlogsTypeBody) {
    return (
        <main className="grid place-items-center p-2 ">
            <div className="w-full md:w-5/6  flex flex-col gap-6  p-2">

                <section className="flex flex-col md:gap-1 gap-3 shadow shadow-neutral-300 rounded-lg p-4">
                    <h1 className={` md:text-xl text-lg text-black/80`}>{title_step_one}</h1>
                    <p className={`${smallfontFace.className} text-[15.2px] text-black/80 `}>{content_one}</p>
                </section>
                <section className="flex flex-col md:gap-1 gap-3 shadow shadow-neutral-300 p-4 rounded-lg">
                    <h1 className={`md:text-xl text-lg text-black/80`}>{title_step_two}</h1>
                    <p className={`${smallfontFace.className} text-[15.2px] text-black/80 `}>{content_two}</p>
                </section>
                <section className="flex flex-col  gap-3 ">
                    <h1 className={`md:text-xl text-lg text-black/80 p-4 shadow shadow-neutral-300 rounded-lg w-fit`}>{title_step_three}</h1>
                    <section className="tablets:w-[200px] p-2 shadow shadow-neutral-400 rounded-lg">
                        <ImageComponent src={image_two} alt="image" />
                    </section>
                </section>

            </div>
        </main>
    );
}