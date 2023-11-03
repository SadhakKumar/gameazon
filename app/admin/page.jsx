"use client"
import React, { useState } from 'react';
import NavBar from '../components/navbar';

const Admin = () => {
  const [serviceData, setServiceData] = useState({
    photographerName: '',
    price: 0,
    description: '',
    category: '',
    imageUrls: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  const handleImageChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value.split(',') });
  };

  const handleSubmit = async () => {
    // Call your API here to create a new service instance
    try {
      const response = await fetch('http://localhost:3000/api/services/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });

      if (response.status === 201) {
        alert('Service created successfully');
      } else {
        alert('Error creating service');
      }
    } catch (error) {
      console.error('API call error:', error);
    }
  };

  return (
    <>
    <NavBar/>
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Admin Page</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Photographer Name</label>
          <input
            type="text"
            name="photographerName"
            value={serviceData.photographerName}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={serviceData.price}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={serviceData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={serviceData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URLs (comma-separated)</label>
          <input
            type="text"
            name="imageUrls"
            value={serviceData.imageUrls.join(',')}
            onChange={handleImageChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Create Service
        </button>
      </form>
    </div>
    </>
  );
};

export default Admin;
