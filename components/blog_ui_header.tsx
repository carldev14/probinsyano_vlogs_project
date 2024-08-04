import Image from "next/image";
import ImageComponent from "./image_component";
interface props {
    title?: string;
    name?: string;
    image: string;
}
export default function Blogheader({ title, name, image }: props) {
    return (
        <main className="grid place-items-center h-auto mt-6">
            <section className="flex flex-col gap-2 items-center">

                <section className="flex flex-col gap-1 text-center">
                    <h1 className="text-lg md:text-xl text-black/80 font-bold tracking-wide">{title}</h1>
                    <p className="text-black/60  text-xs">{name || 'Unknown'}</p> 
                </section>
                <section className="tablets:w-[225px] p-3">
                    <ImageComponent src={image} alt="blog-image" />
                </section>
            </section>
        </main>
    );
}