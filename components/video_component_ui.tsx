"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios"
import Image from "next/image";
import {useMutation} from "@tanstack/react-query"
import { Poppins } from "next/font/google";
import Loading from "./loading";
import LoadingForImage from "./loading_for_images";
import { getUser } from "./actions";

const ImageComponent = dynamic(() => import('./image_component'), {
    loading: () => <LoadingForImage/>,
    ssr: false, // Set to true for server-side rendering (optional)
});
const smallFontFace = Poppins({ subsets: [], weight: '400' });



interface Data {
    _id: number;
    title: string;
    description: string;
    image: string;
    url: string;
}
const getData = async () => {
    const response = await fetch('/api/collections', {

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
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {data.map((item) => (
                    <div key={item._id} className=" p-3  rounded shadow-md ">
                        <section className="text-white flex flex-col gap-2 justify-between ">

                                
                                <ImageComponent

                                    src={item.image}
                                    alt={"Images"}

                                />
           




                            <section className="flex flex-col gap-2">
                                <h1 className="text-sm  text-black/85">{item.title}</h1>

                                <p className={`${smallFontFace.className} text-xs text-black/60`}>{item.description}</p>
                                <hr />
                                <a href={item.url} className="text-white bg-blue-500 text-xs p-2 text-center rounded">Watch Now</a>
                            </section>
                        </section>
                    </div>
                ))}
            </div>

        </main>
    );
}