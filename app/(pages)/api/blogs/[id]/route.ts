import connectMongoDB from "@/libs/mongodb";
import BlogsModels from "@/models/blogs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    await connectMongoDB();
    const topic = await BlogsModels.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
  }