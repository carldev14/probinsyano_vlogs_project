"use client"

import { useEffect, useState } from "react";
import axios from "axios"
import Image from "next/image";
import { Poppins } from "next/font/google";
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
        params: {
            next: { revalidate: 3600 }
        }
    });
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
                    <div key={item._id} className=" p-4 rounded shadow-md">
                        <section className="text-white">

                            <section className="w-full pointer-events-none select-none">
                                {/*When adding an image. make sure that the size of the image is contains with width of 1920px and a height of 190px*/}
                                <Image
                                    src={item.image}
                                    alt={"Images"}
                                    loading="lazy"
                                    className="object-cover rounded h-48"
                                    width={1920}

                                    height={100}
                                />
                            </section>
                            

                            <hr className="my-4" />
                            
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
