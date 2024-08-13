import { BlogsTypeBody } from "@/types/BlogsTypeBody";



import smallfontFace from "@/utils/smallfontface";
import ImageComponent from "./image_component";


export default function BlogPageBodyTut({ content_one, content_two, image_two, url, title_step_three, content, title_step_one, title_step_two, title_step_four, title_step_five, title_step_six, content_three, content_four, content_five, content_six }: BlogsTypeBody) {

    const sections = [
        { id: 1, content: content_one, title: "1" },
        { id: 2, content: content_two, title: "2" },
        { id: 3, content: content_three, title: "3" },
        { id: 4, content: content_four, title: "4" },

    ];
    const sections_2 = [
        { id: 5, content: content_five, title: "5" },
        { id: 6, content: content_six, title: "6" },
    ]

    return (
        <main className=" grid place-items-center px-2 ">
            <div className="w-full md:w-5/6  flex flex-col gap-5  p-3">
                <section className="flex flex-col gap-2  ">
                    <h1 className={` text-lg text-black/85`}>{title_step_one}</h1>
                    <p className={`${smallfontFace.className} text-base text-black/90 `}>{content}</p>
                </section>
                <div className="shadow shadow-neutral-300 h-1 rounded-xl"></div>

                <section className="flex flex-col gap-6  ">
                    <h1 className={` text-lg text-black/85`}>Let's Start our cooking session</h1>
                    <div className="grid grid-cols-1 tablets:grid-cols-2 lg:grid-cols-4 gap-2">
                        {sections.map((item, index) => {
                            return (

                                <section className="flex rounded-lg flex-col items-center   p-4 gap-5 bg-neutral-100  " key={index} >

                                    <h1 className="p-3 text-lg shadow shadow-neutral-400 rounded-full bg-white   text-black/90 w-12 items-center flex justify-center">{item.title}</h1>
                                    <section className="tablets:w-[190px] w-full p-1">
                                        <ImageComponent src={image_two} alt="image" />
                                    </section>
                                    <p className={`${smallfontFace.className} text-center text-base text-black/90 `}>{item.content}</p>
                                </section>

                            )
                        })}
                        {sections_2.map((item, index) => {
                            return (

                                <section className="flex rounded-lg flex-col items-center   p-4 gap-5 bg-neutral-100  " key={index} >

                                    <h1 className="p-3 text-lg shadow shadow-neutral-400 rounded-full bg-white   text-black/90 w-12 items-center flex justify-center">{item.title}</h1>
                                    <section className="tablets:w-[190px] w-full p-1">
                                        <ImageComponent src={image_two} alt="image" />
                                    </section>
                                    <p className={`${smallfontFace.className} text-center text-[15.2px] text-black/90 `}>{item.content}</p>
                                </section>

                            )
                        })}
                    </div>
                </section>
            </div>
        </main>
    );
}