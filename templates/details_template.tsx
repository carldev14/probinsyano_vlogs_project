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
                <section className="flex flex-col gap-2">
                    <h1 className="text-sm  text-black ">{title}</h1>
                    <label className={` text-xs text-black/80`}>{name}</label>
                </section>
                <hr />
                <section>
                    <p className={`${smallfontFace.className}  text-[13.1px]  text-black/90`}>{descriptions}</p>
                </section>



            </section>
        </main>
    );
}