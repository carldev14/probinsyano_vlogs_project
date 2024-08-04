"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";




import LoadingForImage from "./loading_for_images";
import DetailsTemplate from "@/templates/details_template";
import { ListTypes } from "@/types/list_Type";

const ImageComponent = dynamic(() => import('./image_component'), {
    loading: () => <LoadingForImage />,
    ssr: false, // Set to true for server-side rendering (optional)
});





async function getData() {
    const response = await fetch('/api/collections', {

        next: { revalidate: 60 }

    })
    const results = await response.json();
    return results.collections_data;
}
export default function VideoUi() {
    const [data, setData] = useState<ListTypes[]>([]);

    useEffect(() => {
        const fetched = async () => {
            try {


                const fetched_data = await getData();
                setData(fetched_data);

            }
            catch (error) {
                console.log('There was an error: ', error)
            }
        }

        fetched();
    }, [])


    return (
        <main className="p-2">
            <div className="grid grid-cols-1 tablets:grid-cols-2 laptops:grid-cols-3 desktop:grid-cols-5 gap-4">
                {data.map((item) => (

                    <div key={item._id}>


                        <a href={item.url} target="_blank" className="cursor-pointer">
                            <section className="flex flex-col gap-2 shadow shadow-neutral-300 rounded-t-xl p-2 rounded-b-md">
                                <ImageComponent src={item.image} alt="image" />
                                <DetailsTemplate title={item.title} descriptions={item.descriptions} name={item.name}/>


                            </section>
                        </a>

                    </div>

                ))}
            </div>
        </main >
    );
}