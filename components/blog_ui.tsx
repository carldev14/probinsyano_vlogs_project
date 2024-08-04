"use client"
import { BlogsType } from "@/types/blogsType";
import { useEffect, useState } from "react";
import Link from "next/link";
import ImageComponent from "./image_component";

import DetailsTemplate from "@/templates/details_template";


async function getData() {
    const response = await fetch('/api/blogs', {

        next: {
            revalidate: 60
        }


    })
    const results = await response.json();

    return results.blog_list_data
}

export default function BlogUi() {
    const [data, setData] = useState<BlogsType[]>([])

    useEffect(() => {
        const fetched = async () => {

            try {
                const fetched_data = await getData();
                setData(fetched_data)

            } catch (error) {
                console.log(error)
            }
        }

        fetched()
    }, [])
    return (
        <main className="p-2">
            <div className="grid grid-cols-1 tablets:grid-cols-2 laptops:grid-cols-3 desktop:grid-cols-5 gap-4">
                {data.map((item) => (

                    <div key={item._id}>
                        <Link href={`my-blogs/${item._id}`} prefetch>
                            <section className="flex flex-col gap-2 shadow shadow-neutral-300 rounded-t-xl p-2 rounded-b-md">
                                <ImageComponent src={item.image} alt="image" />
                                <DetailsTemplate title={item.title} descriptions={item.descriptions} name={item.name} />


                            </section>
                        </Link>

                    </div>

                ))}
            </div>
        </main >
    );
}