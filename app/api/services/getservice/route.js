// pages/api/services/index.js
import connectMongoDB from "@/lib/mongodb";
import Service from "@/models/service";
import { NextResponse } from "next/server";

await connectMongoDB();
export async function GET(request) {
  
    try {
        
      const services = await Service.find();
      return NextResponse.json({ services });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}
