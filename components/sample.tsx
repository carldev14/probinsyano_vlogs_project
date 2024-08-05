"use client"
import { useQuery } from "@tanstack/react-query";
import { BlogsType } from "@/types/blogsType";
import { useState, useEffect } from "react";

export default function Sample() {
  const [datas, setDatas] = useState<BlogsType[]>([])
  const { data, error, isPending, isFetching } = useQuery({
    queryKey: ['userBlogs'],
    queryFn: async () => {
      const response = await fetch('/api/blogs')
      const data = await response.json()
      return data.blog_list_data;
    },
  })

  useEffect(() => {
    if (data) {
      setDatas(data)
    }
  }, [data])

  if (isPending) return 'Loading...'

  return (
    <div>
      {datas.map((item) => {
        return (
          <div key={item._id}>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}