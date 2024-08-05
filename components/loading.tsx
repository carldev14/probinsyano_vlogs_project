import SvgComponent from "@/assets/spinnerIcon";

export default function Loading() {
    return (
        <main className="flex   w-full p-2 justify-center ">
            <section className="shadow shadow-neutral-300   p-2 rounded-full flex items-center gap-1">
                <SvgComponent className="size-5  animate-spin text-black/90" />
                <label htmlFor="" className="text-xs text-black/50">Please wait</label>
            </section>
        </main>
    );
}