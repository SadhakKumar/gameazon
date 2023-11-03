import connectMongoDB from '@/lib/mongodb';
import Service from '@/models/service';
import { NextResponse } from 'next/server';

export async function POST(request) {
  await connectMongoDB();

  try {
    const reqBody = await request.json();
    const { id } = reqBody;

    const service = await Service.findOne({ _id: id });

    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    const tokenData = {
      photographerName: service.photographerName,
      imageUrls: service.imageUrls,
      price: service.price,
      description: service.description,
      category: service.category,
    };

    return NextResponse.json({ tokenData });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
