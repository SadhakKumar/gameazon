"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import NavBar from '@/app/components/navbar';
import ProductList from '@/app/components/productlist';
import Footer from '@/app/components/footer';
export default function UserProfile({params}) {

    const [service, setService] = useState([]);

    const fetchService = async () => {
        try {
        const response = await fetch('http://localhost:3000/api/services/get', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: params.id }),
          })
        const data = await response.json();
        console.log(data.tokenData);
        setService(data.tokenData);
        } catch (error) {
        console.error('Error fetching services:', error);
        }
    };

    useEffect(() => {
        fetchService();
      }, []);


      return (
        <>
          <NavBar />
          <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service && service.imageUrls && service.imageUrls[0] && (
                <div>
                  <img src={service.imageUrls[0]} alt={service.photographerName} className="w-full h-auto mb-4" />
                </div>
              )}
              <div>
                {service && (
                  <>
                    <h1 className="text-3xl font-semibold">{service.photographerName}</h1>
                    <p className="text-gray-500 mt-2">{service.category}</p>
                    <p className="text-lg font-semibold mt-4">${service.price}</p>
                    <p className="mt-4">{service.description}</p>
                    <button className="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-700">
                      Book Now
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold">More Images</h2>
              <div className="flex flex-wrap gap-4">
                {service && service.imageUrls && service.imageUrls.slice(1).map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index}`}
                    className="w-68 h-48 rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-semibold mb-4 mt-10 mx-10">other packages</h1>
          <ProductList />
          

          <Footer/>
        </>
      );
}
