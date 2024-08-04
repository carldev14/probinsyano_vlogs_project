import SvgComponent from "@/assets/spinnerIcon";

export default function Loading() {
    return (
        <main className="flex   w-full p-2 justify-center items-center h-[400px]">
            <section className="flex flex-col gap-2 items-center justify-center">
                <SvgComponent className="size-6 animate-spin text-black/90" />
                <label htmlFor="" className="text-xs text-black/50">Please wait...</label>
            </section>
        </main>
    );
}