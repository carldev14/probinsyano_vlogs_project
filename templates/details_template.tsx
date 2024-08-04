import smallfontFace from "@/utils/smallfontface";

interface DetailsTemplatetype {
    title?: string,
    descriptions?: string,
    name?: string;
}
export default function DetailsTemplate({ title, descriptions, name }: DetailsTemplatetype) {
    return (
        <main>
            <section className="flex flex-col gap-2 px-1 pb-1">
                <h1 className="text-sm  text-black ">{title}</h1>
                <label className={`${smallfontFace.className} text-xs text-black`}>{name}</label>
                <hr />
                <p className={`${smallfontFace.className} text-xs text-black/90`}>{descriptions}</p>



            </section>
        </main>
    );
}