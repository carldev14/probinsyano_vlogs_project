import { BlogsTypeBody } from "@/types/BlogsTypeBody";



import smallfontFace from "@/utils/smallfontface";
import ImageComponent from "./image_component";


export default function BlogPageBodyTut({ content_one, content_two, image_two, url, title_step_three, content, title_step_one, title_step_two, title_step_four, title_step_five, title_step_six, content_three, content_four, content_five, content_six }: BlogsTypeBody) {
    return (
        <main className=" grid place-items-center p-2 py-4 ">
            <div className="w-full md:w-5/6  flex flex-col gap-5  p-3  ">

                <section className="flex flex-col md:gap-1 gap-4  rounded-lg">
                    <h1 className={`text-lg text-black/85`}>{title_step_one}</h1>
                    <p className={`${smallfontFace.className} text-[15.2px] text-black/80 `}>{content}</p>
                </section>
                <div className="shadow shadow-neutral-300 h-1 rounded-xl"></div>
                <section className="flex flex-col gap-6  ">
                    <h1 className={` text-lg text-black/85`}>Let's Start our cooking session.</h1>
                    <div className="grid tablets:grid-cols-2 lg:grid-cols-4 grid-cols-1  gap-3 ">
                        <section className="flex rounded-lg flex-col items-center   p-4 gap-5 bg-neutral-100 ">


                            <h1 className="p-3 text-lg shadow shadow-neutral-400 rounded-full bg-white   text-black/90 w-12 items-center flex justify-center">
                                1
                            </h1>
                            <section className="tablets:w-[190px] w-full p-1">
                                <ImageComponent src={image_two} alt="image" />
                            </section>
                            <p className={`${smallfontFace.className} text-center text-[15.2px] text-black/90 `}>{content_one}</p>




                        </section>

                        <section className="flex rounded-lg flex-col items-center  p-4 gap-5  bg-neutral-100 ">

                            <h1 className="p-3 text-lg shadow shadow-neutral-400 rounded-full bg-white   text-black/90 w-12 items-center flex justify-center">
                                2
                            </h1>
                            <section className="tablets:w-[190px] w-full p-1">
                                <ImageComponent src={image_two} alt="image" />
                            </section>
                            <p className={`${smallfontFace.className} text-center text-[15.2px] text-black/90 `}>{content_two}</p>


                        </section>

                        <section className="flex rounded-lg flex-col items-center  p-4 gap-5 bg-neutral-100 ">

                            <h1 className="p-3 text-lg shadow shadow-neutral-400 rounded-full bg-white   text-black/90 w-12 items-center flex justify-center">
                                3
                            </h1>
                            <section className="tablets:w-[190px] w-full p-1">
                                <ImageComponent src={image_two} alt="image" />
                            </section>
                            <p className={`${smallfontFace.className} text-center text-[15.2px] text-black/90 `}>{content_three}</p>


                        </section>

                        <section className="flex rounded-lg flex-col items-center  p-4 gap-5 bg-neutral-100 ">

                            <h1 className="p-3 text-lg shadow shadow-neutral-400 rounded-full bg-white   text-black/90 w-12 items-center flex justify-center">
                                4
                            </h1>
                            <section className="tablets:w-[190px] w-full p-1">
                                <ImageComponent src={image_two} alt="image" />
                            </section>
                            <p className={`${smallfontFace.className} text-center text-[15.2px] text-black/90 `}>{content_four}</p>


                        </section>


                    </div>
                    <div className="grid tablets:grid-cols-2 lg:grid-cols-4 grid-cols-1  gap-5 ">
                        <section className="flex rounded-lg flex-col items-center  p-4 gap-5 bg-neutral-100 ">
                            <h1 className="p-3 text-lg shadow shadow-neutral-400 rounded-full bg-white   text-black/90 w-12 items-center flex justify-center">
                                5
                            </h1>
                            <section className="tablets:w-[190px] w-full p-1">
                                <ImageComponent src={image_two} alt="image" />
                            </section>
                            <p className={`${smallfontFace.className} text-center text-[15.2px] text-black/90 `}>{content_five}</p>


                        </section>

                        <section className="flex rounded-lg flex-col items-center  p-4 gap-5 bg-neutral-100 ">

                            <h1 className="p-3 text-lg shadow shadow-neutral-400 rounded-full bg-white   text-black/90 w-12 items-center flex justify-center">
                                6
                            </h1>
                            <section className="tablets:w-[190px] w-full p-1">
                                <ImageComponent src={image_two} alt="image" />
                            </section>
                            <p className={`${smallfontFace.className} text-center text-[15.2px] text-black/90 `}>{content_six}</p>


                        </section>




                    </div>
                </section>

            </div>
        </main>
    );
}