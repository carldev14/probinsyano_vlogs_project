import connectMongoDB from "@/libs/mongodb";
import BlogsModels from "@/models/blogs";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const blog_list_data = await BlogsModels.find().exec();
    return NextResponse.json({ blog_list_data });
}

export async function POST(request: NextRequest) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await BlogsModels.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}