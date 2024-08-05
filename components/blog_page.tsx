// Blogs_Page_Ui.js
"use client"
import { BlogsType } from "@/types/blogsType";
import { Props } from "@/types/params"
import { useEffect, useState } from "react";
import Blogheader from "./blog_ui_header";
import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";



export default function Blogs_Page_Ui({ id }: Props) {


  const { data, error, isPending } = useQuery({
    queryKey: ['blogsSc'],
    queryFn: async () => {
      const response = await fetch(`/api/blogs/${id}`)
      const data = await response.json()
      return data.blog_data;
    },
  })



  //OnLoading. Add a loading screen if not the data is not loaded yet.
  if (isPending) return (
    <div className="pt-2">
      <Loading />
    </div>
  );
  //Error indicator
  if (error) console.log(error)


  return (
    <main className="p-2">


      <Blogheader title={data.title} name={data.name} image={data.image} />

    </main>
  )
}