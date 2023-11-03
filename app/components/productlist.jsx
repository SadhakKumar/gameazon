"use client"
import React from 'react'
import Item from './item'

import { useEffect, useState } from 'react';
import Link from 'next/link';

const ProductList = () => {
  // ... (previous code)

  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/services/getservice');
      const data = await response.json();
      setServices(data.services);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="flex flex-col justify-around flex-wrap mx-10 mt-10 mb-40">
      

      {/* Display services */}
      <div className="flex justify-around flex-wrap mx-10">
        {services.map((service, index) => (
            <Link href={`/homepage/${service._id}`}><Item key={index} name = {service.photographerName} price = {service.price} description = {service.description} category = {service.category} image = {service.imageUrls}/></Link>
          ))}
      </div>
        
      

      {/* Rest of the form and submit button */}
    </div>
  );
};

export default ProductList;


// export default function ProductList() {
//     const num = [0, 1, 2, 3,4,5,6,7,8,9 ,10,11,12,13,14,15,16,17];
//   return (

//     <div className='flex justify-around flex-wrap mx-10'>
//         {num.map((item,index) => {
            
//             return <Item key={index}/>
//         })}
//         <Item/>
//     </div>
//   )
// }
