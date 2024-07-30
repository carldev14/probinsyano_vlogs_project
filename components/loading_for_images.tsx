import SvgComponent from "@/assets/spinnerIcon";

export default function LoadingForImage(){
    return(
        <main className="grid place-items-center " style={{height: '218px'}}>

            <SvgComponent className="size-5 animate-spin text-black/80" />
        </main>
    );
}