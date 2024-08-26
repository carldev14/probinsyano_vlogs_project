import connectMongoDB from "@/libs/mongodb";
import CollectionModels from "@/models/collections";

import { NextRequest, NextResponse } from "next/server";

interface AddCollections {
  title: string,
  descriptions: string,
  url: string,
  imageVideo: string,
  name: string,
}

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
    const collections_data = await CollectionModels.find().exec();
    return NextResponse.json({ collections_data });
}

export async function POST(request: NextRequest) {
  const authResponse = await authenticate(request);
  if (authResponse) return authResponse;

  const { title, descriptions, url, imageVideo, name }: AddCollections = await request.json();

  await connectMongoDB();
  await CollectionModels.create({ title, descriptions, url, imageVideo, name });
  return NextResponse.json({ message: "New Collections Added" }, { status: 201 });
}
