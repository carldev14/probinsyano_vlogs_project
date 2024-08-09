import headerfontface from "@/utils/headerfontface";
import smallfontFace from "@/utils/smallfontface";

interface GreetType{
    title: string,
    descriptions: string,
}
export default function GreetTemplate({title, descriptions} : GreetType){
    return(
        <main className="py-3 ">
            <div className="flex justify-center flex-col items-center gap-1">
                <h1 className={` ${smallfontFace.className} md:text-xl text-lg text-blue-500 font-semibold tracking-wide `}>{title}</h1>
                <p className="text-xs text-black/70 text-center ">{descriptions}</p>
            </div>
        </main>
    );
}