"use client"
import { BlogsType } from "@/types/blogsType";
import { useEffect, useState } from "react";
import Link from "next/link";
import ImageComponent from "./image_component";
import { useQuery } from "@tanstack/react-query";
import DetailsTemplate from "@/templates/details_template";
import Loading from "./loading";



export default function BlogUi() {
    const [blog, setBlog] = useState<BlogsType[]>([])

    const { data, error, isPending } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const response = await fetch('/api/blogs')
            const data = await response.json()
            return data.blog_list_data;
        },
    })

    useEffect(() => {
        if (data) {
            setBlog(data)
        }
    }, [data])
    //OnLoading. Add a loading screen if not the data is not loaded yet.
    if (isPending) return <Loading/>;
    //Error indicator
    if (error) console.log(error)

    return (
        <main className="p-2">
            <div className="grid grid-cols-1 tablets:grid-cols-2 laptops:grid-cols-3 desktop:grid-cols-5 gap-4">
                {blog.map((item) => (

                    <div key={item._id}>
                        <Link href={`my-blogs/${item._id}`} prefetch={true}>
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