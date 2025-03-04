import headerfontface from "@/utils/headerfontface";
import smallfontFace from "@/utils/smallfontface";
import Link from "next/link";

const section = [
    {
        id: 1,
        title: "Upload Videos",
        href: "/protected-features/upload-video",
      
    }
]

export default function MainUi() {
    return (
        <main className="grid place-items-center p-2 ">
            <div className="w-full md:w-5/6 p-2 flex flex-col gap-4">
                <h2 className={`${headerfontface.className} text-xl text-black/80`}>Features Available:</h2>
                <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    {section.map((item, index) => (
                        <Link key={index} href={item.href} className={`${smallfontFace.className} text-center text-blue-700 p-2 bg-blue-50 rounded-lg text-sm`}>
                           {item.title} 
                        </Link>
                    ))}
                </section>
            </div>
        </main>
    );
}