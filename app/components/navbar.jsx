"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import axios from "axios";


  export default function NavBar() {

    const [user, setUser] = useState()
    const getUserDetails = async() => {
      // const res = await fetch("http://localhost:3000/api/users/me",{
      //         method: "GET"
      //     })
      const res = await axios.get('/api/users/me')
      console.log(res.data);
      setUser(res.data.data._id);
  }



  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={`/homepage`}><div className="text-white text-3xl font-bold">Pixel</div></Link>
        <div className="flex items-center space-x-4">
          <div className="relative text-gray-400">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-gray-900 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring focus:border-blue-300 w-64 shadow-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 20a8 8 0 11-16 0 8 8 0 0116 0z"
              />
            </svg>
          </div>
          <div className="text-gray-400">
            <Link href={`/admin`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            </Link>
           
          </div>
          <div className="text-gray-400">
            <Link href={`/profile/${user}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
