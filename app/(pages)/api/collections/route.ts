import connectMongoDB from "@/libs/mongodb";
import CollectionModels from "@/models/collections";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const collections_data = await CollectionModels.find().exec();
    return NextResponse.json({ collections_data });
}

export async function POST(request: NextRequest) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await CollectionModels.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}