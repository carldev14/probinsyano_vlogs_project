"use client"

import { Props } from "@/types/params"
import { useQuery } from "@tanstack/react-query";
import Blogheader from "../blog_ui_header";
import Loading from "../../loading/loading";
import { BlogsType } from "@/types/blogsType";
import BlogPageBodyTut from "./blog_page_body_tutorial";
import DailyLifeBlog from "./blog_page_body_daily_blog";

export default function Blogs_Page_Ui({ slugs }: Props) {
  const { data: blog_page, error, isFetching } = useQuery<BlogsType>({
    queryKey: ['blogsSc', slugs],
    queryFn: async (): Promise<BlogsType> => {
      const response = await fetch(`/api/blogs/${slugs}`, {
        headers: { 'Authorization': `Bearer ${process.env.TOKEN!}` }
      })
      if (!response.ok) {
        throw new Error('Failed to fetch blog data');
      }
      const data = await response.json();
      return data.blog_data as BlogsType; // Ensure the data is cast to BlogsType
    },
  })

  if (isFetching) return (
    <div className="pt-2">
      <Loading />
    </div>
  );

  if (error) return <div>Error loading blog data. Please try again later.</div>;

  if (!blog_page) return <div>No blog data found.</div>;

  return (
    <main className="">
      <Blogheader
        title={blog_page.title}
        name={blog_page.name}
        image={blog_page.image}
        descriptions={blog_page.descriptions}
      />

      {blog_page.layout === "tutorial" ? (
        <BlogPageBodyTut
          content={blog_page.content}
          title_step_four={blog_page.title_step_four}
          title_step_five={blog_page.title_step_five}
          title_step_six={blog_page.title_step_six}
          title_step_three={blog_page.title_step_three}
          image_two={blog_page.image_two}
          title_step_one={blog_page.title_step_one}
          title_step_two={blog_page.title_step_two}
          content_one={blog_page.content_one}
          content_two={blog_page.content_two}
          content_three={blog_page.content_three}
          content_four={blog_page.content_four}
          content_five={blog_page.content_five}
          content_six={blog_page.content_six}
          url={blog_page.url}
        />
      ) : blog_page.layout === "daily_blog" ? (
        <DailyLifeBlog
          content={blog_page.content}
          title_step_four={blog_page.title_step_four}
          title_step_five={blog_page.title_step_five}
          title_step_six={blog_page.title_step_six}
          title_step_three={blog_page.title_step_three}
          image_two={blog_page.image_two}
          title_step_one={blog_page.title_step_one}
          title_step_two={blog_page.title_step_two}
          content_one={blog_page.content_one}
          content_two={blog_page.content_two}
          content_three={blog_page.content_three}
          content_four={blog_page.content_four}
          content_five={blog_page.content_five}
          content_six={blog_page.content_six}
          url={blog_page.url}
        />
      ): blog_page.layout === "entertainment" && (
        <>
        </>
      )}
    </main>
  )
}
