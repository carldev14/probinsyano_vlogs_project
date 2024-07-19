"use client"
import { useEffect, useState } from "react";

interface Data{
    id: number;
    title: string;
    body: string;
}
const getData = async () => {
    const results = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'force-cache',
    })
    const data = await results.json();
    return data;
}
export default function VideoUi() {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        const fetched = async () => {
            try{
                const fetched_data = await getData();
                setData(fetched_data);
                
            }
            catch (error){
                console.log('There was an error: ',error)
            }
        }

        fetched();
    }, [])

    return (
        <main>
            {
                data.map((item) => (
                    <div key={item.id}>
                        <h1>Title: {item.title}</h1>
                        <p>Description: {item.body}</p>
                    </div>
                ))
            }
        </main>
    );
}