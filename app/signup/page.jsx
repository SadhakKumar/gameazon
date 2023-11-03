'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        // Regular expression to validate email format
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegex.test(email);
    }

    const validatePassword = (password) => {
        // Password should be at least 8 characters long
        return password.length >= 8;
    }

    const isGmailEmail = (email) => {
        // Check if the email domain is "gmail.com"
        return email.endsWith("gmail.com");
    }

    const onSignup = async () => {
        try {
            if (!validateEmail(user.email)) {
                console.log("Invalid email format");
                return;
            }

            if (!isGmailEmail(user.email)) {
                console.log("Email must be from 'gmail.com'");
                return;
            }

            if (!validatePassword(user.password)) {
                console.log("Password must be at least 8 characters long");
                return;
            }

            setLoading(true);
            
            const response = await fetch("http://localhost:3000/api/users/signup", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(user)
            })

            if (response.status === 201) {
                router.push("/login");
            }

        } catch (error) {
            console.error("Signup failed", error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length >= 8 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 shadow-lg rounded-lg w-96">
            <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
            
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                  Username
                </label>
                <input
                  className="w-full p-2 border rounded-lg focus:ring focus:outline-none"
                  id="username"
                  type="text"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  placeholder="Username"
                />
              </div>
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
                onClick={onSignup}
                className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                disabled={buttonDisabled}
              >
                {loading ? 'Processing' : 'Sign Up'}
              </button>
            <div className="text-center mt-4">
              <Link href="/login">
                Visit Login page
              </Link>
            </div>
          </div>
        </div>
      );
}
