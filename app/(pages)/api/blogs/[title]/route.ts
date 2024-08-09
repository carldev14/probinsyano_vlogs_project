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

export async function GET(request: NextRequest, { params }: { params: { title: string } }) {
  const authResponse = await authenticate(request);
  if (authResponse) return authResponse;

  const { title } = params;


  await connectMongoDB();
  const blog_data = await BlogsModels.findOne({ slugs: title });
  
  return NextResponse.json({ blog_data }, { status: 200 });
}