import connectMongoDB from "@/lib/mongodb";
import Service from "@/models/service";
import { NextResponse } from "next/server";


await connectMongoDB();

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { photographerName, imageUrls, price, description, category } = reqBody

        console.log(reqBody);

        await Service.create({ photographerName, imageUrls, price, description, category });

        return NextResponse.json({ message: "ticket created" }, { status: 201 });




    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
