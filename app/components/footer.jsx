import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 relative bottom-0 w-full mt-40">
  <div className="container mx-auto flex flex-col md:flex-row justify-between">
    <div className="md:w-1/4">
      <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-500">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="hover:text-blue-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-blue-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
    <div className="md:w-1/4">
      <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
      <p>Email: contact@example.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
    <div className="md:w-1/4">
      <h3 className="text-2xl font-semibold mb-4">Policies</h3>
      <ul className="list-disc pl-4">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Refund Policy</a></li>
      </ul>
    </div>
    <div className="md:w-1/4">
      <h3 className="text-2xl font-semibold mb-4">About Us</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ullamcorper dui.</p>
    </div>
  </div>
  <div className="mt-8 text-center">
    <p>&copy; 2023 Your Website. All Rights Reserved.</p>
  </div>
</footer>
  )
}
