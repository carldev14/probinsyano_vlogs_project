

'use client'

import Blogs_Page_Ui from "@/components/blogs_component/dynamic_page/blog_page";
interface Props {
  params: {
    title: string;
  };
}

export default function BlogPage({ params }: Props) {
  return <Blogs_Page_Ui slugs={params.title} />;
}
