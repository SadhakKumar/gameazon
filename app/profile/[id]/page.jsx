"use client"

import Footer from "@/app/components/footer";
import NavBar from "@/app/components/navbar";
import { useRouter } from 'next/navigation'
export default function UserProfile({params}) {
    const router = useRouter()
    const user = {
        username: 'Sadhakkumar',
        email: '2021.sadhak.kumar@gmail.com',
        isVerified: false,
        isAdmin: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      };

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

    return (
        <>
        <NavBar/>
        <div className="container mx-auto mt-20">
          <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
          <div className="bg-white shadow-lg rounded-lg p-4 flex">
            <div className="w-1/4">
              <img
                src="/dummy-profile-image.jpg" // Replace with the actual image source
                alt="Profile Image"
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div className="w-3/4 pl-4">
              <h2 className="text-2xl font-semibold">{user.username}</h2>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Description:</strong> {user.description}
              </p>
              <button className="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-700" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
        <Footer/>
        </>
        
      );
}
