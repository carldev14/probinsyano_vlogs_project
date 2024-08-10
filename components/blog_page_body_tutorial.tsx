import { BlogsTypeBody } from "@/types/BlogsTypeBody";



import smallfontFace from "@/utils/smallfontface";
import ImageComponent from "./image_component";


export default function BlogPageBodyTut({ content_one, content_two, image_two, url, title_step_three, title_step_one, title_step_two }: BlogsTypeBody) {
    return (
        <main className="grid place-items-center p-4 bg-neutral-50 ">
            <div className="w-full md:w-5/6  flex flex-col gap-5  p-3  ">

                <section className="flex flex-col md:gap-1 gap-3 ">
                    <h1 className={` md:text-xl text-lg text-black/90`}>{title_step_one}</h1>
                    <p className={`${smallfontFace.className} text-[15.2px] text-black/90 `}>{content_one}</p>
                </section>
                <section className="flex flex-col md:gap-1 gap-3 ">
                    <h1 className={`md:text-xl text-lg text-black/90`}>{title_step_two}</h1>
                    <p className={`${smallfontFace.className} text-[15.2px] text-black/90 `}>{content_two}</p>
                </section>
                <section className="flex flex-col  gap-3 ">
                    <h1 className={`md:text-xl text-lg text-black/90 `}>{title_step_three}</h1>
                    <section className="tablets:w-[200px] p-2 shadow shadow-neutral-400 rounded-lg">
                        <ImageComponent src={image_two} alt="image" />
                    </section>
                </section>

            </div>
        </main>
    );
}