"use client";
import ImageComponent from "@/components/media/image_component";
import useApi from "@/custom_hooks/useApi";
import { useEdgeStore } from "@/lib/edgestore";
import headerPoppins from "@/utils/italicPoppins";
import smallfontFace from "@/utils/smallfontface";
import React, { useEffect, useState } from "react";

interface InputField {
    type: string;
    value: string;
    title: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function UploadUi() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [descriptions, setDescriptions] = useState("");
    const [url, setUrl] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [image, setImage] = useState("");
    const [previewUrl, setPreviewUrl] = useState<string | null>(null); // State to store preview URL

    const { edgestore } = useEdgeStore();
    const { post } = useApi();

    const inputFields: InputField[] = [
        {
            title: "Name",
            type: "text",
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
    ];

    const { mutate, isSuccess } = post('/api/collections', {
        name,
        title,
        descriptions,
        url,
        image,
    });

    useEffect(() => {
        if (isSuccess) {
            setName("");
            setTitle("");
            setDescriptions("");
            setUrl("");
            setFile(null);
            setPreviewUrl(null);
        }
    }, [isSuccess]);

    const handleRemoveImage = () => {
        setFile(null);
        setPreviewUrl(null);
        // Reset file input value
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        if (fileInput) {
            fileInput.value = "";
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile)); // Set preview URL
        }
    };
// I will add a auto converter png to webp soon
    async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (file) {
            const res = await edgestore.publicFiles.upload({
                file,
                onProgressChange: (progress) => {
                    console.log(progress); // Optional: Progress bar can be shown here
                },
            });
            setImage(res.url);
            mutate();
        }
    }

    return (
        <main className="grid place-items-center p-2 h-[90vh]">
            <div className="w-full md:w-[40%] lg:w-[30%] p-4">
                <form onSubmit={handleUpload} className="flex flex-col gap-4">
                    {inputFields.map((field, index) => (
                        <section className="flex flex-col gap-2" key={index}>
                            <legend className={`${headerPoppins.className} text-xs text-black/70`}>{field.title}</legend>
                            <input
                                type={field.type}
                                onChange={field.onChange}
                                value={field.value}
                                className={`${smallfontFace.className} text-[13.5px] outline-none border border-black/20 w-full p-2 rounded-md text-black/90 px-2`}
                            />
                        </section>
                    ))}

                    <section className="flex flex-col gap-2">
                        <legend className={`${headerPoppins.className} text-xs text-black/70`}>Upload</legend>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className={`${smallfontFace.className} text-[13.2px]`}
                        />
                        {previewUrl && (
                            <div className="relative">
                                <ImageComponent src={previewUrl} alt="" />
                                <button
                                    type="button"
                                    onClick={handleRemoveImage}
                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                                >
                                    Remove
                                </button>
                            </div>
                        )}
                    </section>
                    <section className="w-full flex justify-end">
                        <button className="p-2 w-full lg:w-1/2 bg-blue-500 text-[13.2px] rounded-md text-white">
                            Save
                        </button>
                    </section>
                </form>
            </div>
        </main>
    );
}
