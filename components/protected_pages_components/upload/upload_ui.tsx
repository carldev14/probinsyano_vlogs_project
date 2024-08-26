"use client";
import ImageComponent from "@/components/media/image_component";
import useApi from "@/custom_hooks/useApi";
import { useEdgeStore } from "@/lib/edgestore";
import headerPoppins from "@/utils/italicPoppins";
import smallfontFace from "@/utils/smallfontface";
import React, { useEffect, useState } from "react";
import {
    EdgeStoreApiClientError
} from '@edgestore/react/errors';
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
    const [imageVideo, setImageVideo] = useState("");
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

    const { mutate, isSuccess, error } = post('/api/collections', {
        name,
        title,
        descriptions,
        url,
        imageVideo,
    });

    useEffect(() => {
        if (isSuccess) {
            setName("");
            setTitle("");
            setDescriptions("");
            setUrl("");
            setFile(null);
            setPreviewUrl(null);

            const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
            if (fileInput) {
                fileInput.value = "";
            }

            alert('Upload Successfully.')
        }

    }, [isSuccess]);

    if (error) {
        console.log(error)
    }
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
        try {
            if (file) {
                const res = await edgestore.publicFiles.upload({
                    file,

                    onProgressChange: (progress) => {
                        console.log(progress); // Optional: Progress bar can be shown here
                    },
                });
                const imageUrl = res.url
                setImageVideo(imageUrl);


                setTimeout(() => {
                    mutate();
                }, 1000);

            }
        } catch (error) {
            if (error instanceof EdgeStoreApiClientError) {
                // if it fails due to the `maxSize` set in the router config
                if (error.data.code === 'FILE_TOO_LARGE') {
                    alert(
                        `File too large. Max size is ${formatFileSize(
                            error.data.details.maxFileSize,
                        )}`,
                    );
                }
            }


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
function formatFileSize(maxFileSize: number) {
    throw new Error("Function not implemented.");
}

