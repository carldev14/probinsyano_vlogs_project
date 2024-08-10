// Blogs_Page_Ui.js
"use client"

import { Props } from "@/types/params"

import Blogheader from "./blog_ui_header";
import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";

import { useEffect, useState } from "react";
import { BlogsType } from "@/types/blogsType";
import BlogPageBodyTut from "./blog_page_body_tutorial";




export default function Blogs_Page_Ui({ slugs }: Props) {

  const [blog_page, setBlogPage] = useState<BlogsType | null>(null)

  const { data, error, isFetching } = useQuery({
    queryKey: ['blogsSc'],
    queryFn: async () => {
      const response = await fetch(`/api/blogs/${slugs}`, {
        headers: {

          'Authorization': `Bearer ${process.env.TOKEN!}`,
        }
      })
      const data = await response.json()
      return data.blog_data;
    },
  })


  useEffect(() => {
    if (data) {
      setBlogPage(data)
    }
  }, [data])

  //OnLoading. Add a loading screen if not the data is not loaded yet.
  if (isFetching) return (
    <div className="pt-2">
      <Loading />
    </div>
  );
  //Error indicator
  if (error) console.log(error)


  return (
    <main className="">

      {blog_page?.layout === "tutorial" ? (
        <div className="flex flex-col">
          <Blogheader title={blog_page.title} name={blog_page.name} image={blog_page.image} descriptions={blog_page.descriptions} />
          <BlogPageBodyTut title_step_three={blog_page.title_step_three} image_two={blog_page.image_two} title_step_one={blog_page.title_step_one} title_step_two={blog_page.title_step_two} content_one={blog_page.content_one} content_two={blog_page.content_two} url={blog_page.url} />

        </div>
      ) : blog_page?.layout === "entertainment" ? (
        <>
          <Blogheader title={blog_page.title} name={blog_page.name} image={blog_page.image} descriptions={blog_page.descriptions} />
        </>

      ) : blog_page?.layout === "dailylife" && (
        <>
          <Blogheader title={blog_page.title} name={blog_page.name} image={blog_page.image} descriptions={blog_page.descriptions} />
        </>

      )}


    </main>
  )
}