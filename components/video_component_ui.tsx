"use client"
import dynamic from "next/dynamic";
import { cache, useEffect, useState } from "react";
import axios from "axios"
import Image from "next/image";
import { Poppins } from "next/font/google";
import Loading from "./loading";
import LoadingForImage from "./loading_for_images";

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
    const response = await axios.get('/api/collections', {
        params:{
            cache: 'force-cache'
        }
    }
        
    );

    return response.data.collections;
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
                    <div key={item._id} className=" p-4  rounded shadow-md ">
                        <section className="text-white flex flex-col gap-2">

                                {/*When adding an image. make sure that the size of the image is contains with width of 1920px and a height of 190px*/}
                                <ImageComponent

                                    src={item.image}
                                    alt={"Images"}
                                    width={680}
                                    height={360}
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
