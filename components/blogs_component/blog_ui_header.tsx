
import headerfontface from "@/utils/headerfontface";
import ImageComponent from "../media/image_component";

import smallfontFace from "@/utils/smallfontface";
import Link from "next/link";
interface props {
    title?: string;
    name?: string;
    image: string;
    descriptions: string;
}
export default function Blogheader({ title, name, image, descriptions }: props) {
    return (
        <main className="grid place-items-center h-auto  p-2">
            <section className="flex flex-col gap-4  w-full md:w-5/6 p-2">

                <section className="flex flex-col gap-2  p-1 ">
                    <h1 className={`   text-2xl    text-black/80 tracking-wide`}>{title}</h1>

                    <label className={`${smallfontFace.className}  text-black/80 text-[15px] tracking-tight text-sm`}>{name || 'Unknown'}</label>

                </section>
                <div className="shadow shadow-neutral-300 h-1 rounded-xl"></div>
                {/* decription section */}
                <section className=" flex flex-col gap-1 shadow p-2 shadow-neutral-300 rounded-lg">
                    <label className={`${smallfontFace.className} text-black/90 text-sm`}>Descriptions: </label>
                    <p className={`${smallfontFace.className} text-black/80 text-sm  `}>{descriptions}</p>
                </section>
                <section className="tablets:w-[210px] p-2 shadow shadow-neutral-300 rounded-lg">
                    <ImageComponent src={image} alt="blog-image" />

                </section>


                <Link href={'/my-blogs'} prefetch={true} className={` ${smallfontFace.className} shadow shadow-neutral-300 w-fit   p-3 text-sm rounded-lg text-black/90 `}>Go back </Link>





            </section>
        </main>
    );
}