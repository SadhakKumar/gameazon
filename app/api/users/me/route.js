import {getDataFromToken} from "@/helpers/getDataFromToken";
import { NextResponse } from "next/server";
import User from "@/models/user";
import connectMongoDB from "@/lib/mongodb";

await connectMongoDB();

export async function GET(request) {
    try {
        const userId = getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({message:"user found", data: user});
    } catch (error) {
        return NextResponse.json({error: error.message},{status: 400});
    }
}