import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


await connectMongoDB();

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // const newUser = new User({
        //     username,
        //     email,
        //     password: hashedPassword
        // })

        // const savedUser = await newUser.save()
        // console.log(savedUser);

        await User.create({ username, email, password: hashedPassword });

        return NextResponse.json({ message: "ticket created" }, { status: 201 });




    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
