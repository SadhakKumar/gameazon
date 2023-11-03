'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
// import { toast } from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",

    })
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            console.log(user);
            // const response = await axios.post("/api/users/login", user);
            const response = await fetch("http://localhost:3000/api/users/login", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(user)
            })
            // console.log("Login success", response.data);


            router.push("/homepage");


        } catch (error) {
            console.log("Login failed", error.message);

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 shadow-lg rounded-lg w-96">
            <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
            
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  className="w-full p-2 border rounded-lg focus:ring focus:outline-none"
                  id="email"
                  type="text"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  className="w-full p-2 border rounded-lg focus:ring focus:outline-none"
                  id="password"
                  type="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  placeholder="Password"
                />
              </div>
              <button
                onClick={onLogin}
                className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none">
                {loading ? 'Processing' : 'Login'}
              </button>
            
            <div className="text-center mt-4">
              <Link href="/signup">
                Visit Signup page
              </Link>
            </div>
          </div>
        </div>
      );
}