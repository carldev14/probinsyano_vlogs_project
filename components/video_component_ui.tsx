"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";


import { Poppins } from "next/font/google";

import LoadingForImage from "./loading_for_images";


const ImageComponent = dynamic(() => import('./image_component'), {
    loading: () => <LoadingForImage />,
    ssr: false, // Set to true for server-side rendering (optional)
});
const smallFontFace = Poppins({ subsets: [], weight: '400', display: "swap", });



interface Data {
    _id: number;
    title: string;
    description: string;
    image: string;
    url: string;
}
const getData = async () => {
    const response = await fetch('/api/collections', {
        cache: 'force-cache',
        next: { revalidate: 60 }

    })
    const results = await response.json();
    return results.collections;
}
export default function VideoUi() {
    const [data, setData] = useState<Data[]>([]);

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
                    <div key={item._id} className=" p-3 ">
                        <section className="text-white flex flex-col gap-2 justify-between ">


                            <ImageComponent

                                src={item.image}
                                alt={"Images"}

                            />





                            <section className="flex flex-col gap-4">
                                <section className="flex flex-col gap-2">
                                    <h1 className="text-sm  text-black/90">{item.title}</h1>

                                    <p className={`${smallFontFace.className} text-xs text-black/80`}>{item.description}</p>



                                </section>
                                <a href={item.url} className="text-white bg-blue-500 text-xs p-2 text-center rounded-lg ">Watch Now</a>
                            </section>
                        </section>
                    </div>
                ))}
            </div>

        </main>
    );
}