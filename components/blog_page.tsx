// Blogs_Page_Ui.js
"use client"
import { BlogsType } from "@/types/blogsType";
import { Props } from "@/types/params"
import { useEffect, useState } from "react";
import Blogheader from "./blog_ui_header";

async function getBlogById(id: string) {
  try {
    const res = await fetch(`/api/blogs/${id}`, {
      next: {
        revalidate: 60
      }
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const result = await res.json();
    return result.blog_data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default function Blogs_Page_Ui({ id }: Props) {
  const [data, setData] = useState<BlogsType | null>(null)
  useEffect(() => {
    async function loadData() {
      const fetchedData = await getBlogById(id);
      setData(fetchedData);
    }
    loadData();
  }, [id])

  return (
    <main className="p-2">
      {data && (
        <Blogheader title={data.title} name={data.name} image={data.image} />
      )}
    </main>
  )
}