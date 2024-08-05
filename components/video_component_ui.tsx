"use client"

import { useEffect, useState } from "react";
import DetailsTemplate from "@/templates/details_template";
import { ListTypes } from "@/types/list_Type";
import Loading from "./loading";
import { useQuery } from "@tanstack/react-query";
import ImageComponent from "./image_component";

export default function VideoUi() {
    const [videos, setVideos] = useState<ListTypes[]>([]);

    const { data, error, isPending } = useQuery({
        queryKey: ['videos'],
        queryFn: async () => {
            const response = await fetch('/api/collections', {
                headers: {
                    
                    'Authorization': `Bearer ${process.env.TOKEN!}`,
                }
            })
            const data = await response.json()
            return data.collections_data;
        },
    })
    
    useEffect(() => {
        if (data) {
            setVideos(data)
        }
    }, [data])
    //OnLoading. Add a loading screen if not the data is not loaded yet.
    if (isPending) return <Loading/>;
    //Error indicator
    if (error) console.log(error)


    return (
        <main className="p-2">
            <div className="grid grid-cols-1 tablets:grid-cols-2 laptops:grid-cols-3 desktop:grid-cols-5 gap-4">
                {videos.map((item) => (

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