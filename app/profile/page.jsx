'use client'
import axios from "axios";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function ProfilePage() {
    const router = useRouter()
    const [user, setUser] = useState()
    const logout = async() => {
        try {
            const res = await fetch("http://localhost:3000/api/users/logout",{
                method: "GET"
            })
            console.log("logout successful");
            router.push('/login');
        } catch (error) {
            console.log(error.message);
        }
    }

    const getUserDetails = async() => {
        // const res = await fetch("http://localhost:3000/api/users/me",{
        //         method: "GET"
        //     })
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setUser(res.data.data._id);
    }
    return (
        <div>
            <h1>ProfilePage</h1>

            <h2 className="p-1 rounded bg-green-500">{user === "" ? "Nothing" : <Link href={`/profile/${user}`}>{user}
            </Link>}</h2>

            <button 
            className='bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={logout}>
                Logout
            </button>
            <button 
            className='bg-green-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={getUserDetails}>  
                Get user
            </button>
        </div>
    )
}
