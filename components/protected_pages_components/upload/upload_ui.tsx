"use client"
import useApi from "@/custom_hooks/useApi";
import headerPoppins from "@/utils/italicPoppins";
import smallfontFace from "@/utils/smallfontface";
import { useState } from "react";

interface InputField {

    type: string;
    value: string;
    title: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function UploadUi() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [descriptions, setDescriptions] = useState("");
    const [url, setUrl] = useState("");
    const [image, setImage] = useState("");

    const { post } = useApi();
    const inputFields: InputField[] = [
        {
            title: "Name",

            type: "name",
            value: name,
            onChange: (e) => setName(e.target.value),
        },
        {
            title: "Title",

            type: "text",
            value: title,
            onChange: (e) => setTitle(e.target.value),
        },
        {
            title: "Description",

            type: "text",
            value: descriptions,
            onChange: (e) => setDescriptions(e.target.value),
        },
        {
            title: "Url",

            type: "text",
            value: url,
            onChange: (e) => setUrl(e.target.value),
        },
        {
            title: "Image",

            type: "text",
            value: image,
            onChange: (e) => setImage(e.target.value),
        },
    ];


    //Post mutation
    const { mutate, data, error, isSuccess } = post('/api/collections', {
        name,
        title,
        descriptions,
        url,
        image,
    });


    function handleUpload(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        mutate();

    }
    return (
        <main className="grid place-items-center p-2 h-[90vh]">
            <div className="w-full md:w-[40%] lg:w-[30%] p-4 ">
                <form onSubmit={handleUpload} className="flex flex-col gap-4">
                    {inputFields.map((field, index) => (
                        <fieldset className="">
                            <section className="flex flex-col gap-2">
                                <legend className={`${headerPoppins.className} text-xs text-black/70 `}>{field.title}</legend>

                                <input type={field.type}
                                    onChange={field.onChange}
                                    value={field.value}

                                    className={`${smallfontFace.className}
                                    text-[13.5px]  outline-none border border-black/20 w-full p-2  rounded-md text-black/90 px-2`} />


                            </section>
                        </fieldset>
                    ))}
                    <section className="w-full flex justify-end">
                        <button className="p-2 w-full lg:w-1/2 bg-blue-500 text-[13.2px] rounded-md text-white ">
                            Save
                        </button>
                    </section>
                </form>
            </div>
        </main>
    );
}