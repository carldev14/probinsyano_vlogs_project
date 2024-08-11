import SvgComponent from "@/assets/spinnerIcon";

export default function Loading() {
    return (
        <main className={`flex   w-full p-2 justify-center items-center h-screen`}>
            <section className=" flex flex-col items-center gap-2">
                <SvgComponent className="size-5  animate-spin text-black/90" />
                <label htmlFor="" className="text-xs text-black/50">Please wait</label>
            </section>
        </main>
    );
}