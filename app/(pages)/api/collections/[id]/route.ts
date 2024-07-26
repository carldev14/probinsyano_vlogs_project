import connectMongoDB from "@/libs/mongodb";
import CollectionModels from "@/models/collections";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    await connectMongoDB();
    const topic = await CollectionModels.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
  }