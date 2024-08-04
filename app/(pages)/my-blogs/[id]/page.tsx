'use client'

import Blogs_Page_Ui from "@/components/blog_page";
import { useEffect } from "react";
interface props {
  params: {
    id: string;
  }
}
export default function BlogPage({ params }: props) {

  return <Blogs_Page_Ui id={params.id} />;
}