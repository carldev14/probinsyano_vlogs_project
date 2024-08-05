import connectMongoDB from "@/libs/mongodb";
import BlogsModels from "@/models/blogs";

import { NextRequest, NextResponse } from "next/server";



const authenticate = async (req: NextRequest) => {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const receivedToken = authHeader.split(' ')[1];
  if (receivedToken !== process.env.TOKEN!) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  return null;
};

export async function GET(request: NextRequest) {
  const authResponse = await authenticate(request);
  if (authResponse) return authResponse;

  await connectMongoDB();
  const blog_list_data = await BlogsModels.find().exec();
  return NextResponse.json({ blog_list_data });
}

export async function POST(request: NextRequest) {
  const authResponse = await authenticate(request);
  if (authResponse) return authResponse;

  const { title, description } = await request.json();
  await connectMongoDB();
  await BlogsModels.create({ title, description });
  return NextResponse.json({ message: "Blog Added" }, { status: 201 });
}