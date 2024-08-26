"use client";

import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/loading";
import ImageComponent from "../media/image_component";
import DetailsTemplate from "@/templates/details_template";
import GreetTemplate from "@/templates/greet_template";
import { ListTypes } from "@/types/list_Type"; // Ensure ListTypes is an array of objects
import NodataUI from "../no_data_fetched/nodataUi";

export default function VideoUi() {
  const { data: my_videos, error, isLoading } = useQuery<ListTypes[]>({
    queryKey: ['videos'],
    queryFn: async (): Promise<ListTypes[]> => {
      const response = await fetch('/api/collections', {
        headers: {
          'Authorization': `Bearer ${process.env.TOKEN!}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.collections_data as ListTypes[];
    },
  });

  if (isLoading) return <Loading />;

  if (error) return <div>Error loading videos. Please try again later.</div>;

  if (!my_videos || my_videos.length === 0) return <NodataUI />;

  return (
    <>
      <GreetTemplate title="My Videos" descriptions="Please check out my videos and support me" />
      <main className="p-2">
        <div className="grid grid-cols-1 tablets:grid-cols-2 laptops:grid-cols-3 desktop:grid-cols-5 gap-4">
          {my_videos.map((item: ListTypes) => (
            <div key={item._id}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <section className="flex flex-col gap-1 shadow bg-gray-50 shadow-neutral-300 md:p-2 p-3 rounded-md">
                  <ImageComponent src={item.imageVideo} alt={item.title} />
                  <DetailsTemplate title={item.title} descriptions={item.descriptions} name={item.name} />
                </section>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
