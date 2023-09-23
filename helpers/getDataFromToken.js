import { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";


export const getDataFromToken = (req) => {
    try {
        const token = req.cookies.get("token")?.value || '';
        const decodedToken = Jwt.verify(token,process.env.TOKEN_SECRET)
        return decodedToken.id;
    } catch (error) {
        console.log(error.message);
    }
}