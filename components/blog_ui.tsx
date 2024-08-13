"use client"
import { BlogsType } from "@/types/blogsType";
import { useEffect, useState } from "react";
import Link from "next/link";
import ImageComponent from "./image_component";
import { useQuery } from "@tanstack/react-query";
import DetailsTemplate from "@/templates/details_template";
import Loading from "./loading";
import GreetTemplate from "@/templates/greet_template";



export default function BlogUi() {

    const { data: blog, error, isPending } = useQuery<BlogsType[]>({
        queryKey: ['blogs'],
        queryFn: async (): Promise<BlogsType[]> => {
            const response = await fetch('/api/blogs', {
                headers: {

                    'Authorization': `Bearer ${process.env.TOKEN!}`,
                }
            })
            const data = await response.json()
            return data.blog_list_data as BlogsType[];
        },
    })


    //OnLoading. Add a loading screen if not the data is not loaded yet.
    if (isPending) return <Loading />;
    //Error indicator
    if (error) console.log(error)

    return (
        <>
            <GreetTemplate title="Read my blogs" descriptions="I upload is mostly my daily life, recipe, and others." />
            <main className="p-2">
                <div className="grid grid-cols-1 tablets:grid-cols-2 laptops:grid-cols-3 desktop:grid-cols-5 gap-4">
                    {blog?.map((item: BlogsType) => (

                        <div key={item._id}>
                            <Link href={`my-blogs/${item.slugs}`} prefetch={true}>
                                <section className="flex flex-col gap-1 shadow shadow-neutral-300 rounded-t-xl p-2 rounded-b-md">
                                    <ImageComponent src={item.image} alt="image" />
                                    <DetailsTemplate title={item.title} descriptions={item.descriptions} name={item.name} />



                                </section>
                            </Link>

                        </div>

                    ))}
                </div>
            </main >
        </>
    );
}