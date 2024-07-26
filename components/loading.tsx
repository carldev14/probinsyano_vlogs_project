import SvgComponent from "@/assets/spinnerIcon";
export default function Loading() {
    return (
        <main className="grid place-items-center ">
            <div className="flex justify-center items-center w-full " style={{ height: '90vh' }}>
                <section className="flex gap-2 items-center">
                    <SvgComponent className="size-6 animate-spin text-black/90" />
                    <label className="text-sm text-black/90">Loading...</label>
                    
                </section>
            </div>
        </main>
    );
}