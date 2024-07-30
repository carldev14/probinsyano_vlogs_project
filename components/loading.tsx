import SvgComponent from "@/assets/spinnerIcon";

export default function Loading() {
    return (
        <main className="flex justify-center items-center h-screen w-full">
            <section className="flex flex-col gap-2 items-center justify-center">
                <SvgComponent className="size-6 animate-spin text-black/90" />
                <label className="text-sm text-black/90">Loading...</label>
            </section>
        </main>
    );
}