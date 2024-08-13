import headerfontface from "@/utils/headerfontface";
import smallfontFace from "@/utils/smallfontface";

interface DetailsTemplatetype {
    title?: string,
    descriptions?: string,
    name?: string;

}
export default function DetailsTemplate({ title, descriptions, name }: DetailsTemplatetype) {
    return (
        <main>
            <section className="flex flex-col gap-[6px] p-1  ">
                <section className="">
                    <h1 className={` text-[14.5px]  text-slate-800 line-clamp-1`}>{title}</h1>
                    <label className={`${smallfontFace.className} text-xs text-slate-800`}>{name}</label>
                </section>
                <hr />
                <section className="">
                    <p className={`${smallfontFace.className} line-clamp-2 p- text-[13.5px]   text-slate-700`}>{descriptions}</p>
                </section>



            </section>
        </main>
    );
}