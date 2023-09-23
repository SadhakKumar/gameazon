import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

await connectMongoDB();

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody;

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: error.message }, { status: 400 })
        }

        const validPassword = await bcryptjs.compare(password, user.password)

        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 })
        }

        //create token data

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        //create token

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" })

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })

        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response;


    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}