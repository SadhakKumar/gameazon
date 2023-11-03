'use client'
import React, {useState, useEffect} from 'react'

export default function Slider() {
    const imageUrls = [
        'https://www.pixsy.com/wp-content/uploads/2016/07/work-for-free-2017-1024x576.jpg',
        'https://crowdskills.com/wp-content/uploads/2018/12/business-photography-services.jpg',
        'https://www.indiafilings.com/learn/wp-content/uploads/2017/07/GST-Rate-for-Photography-Services.jpg',
      ];

      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      const nextImageIndex = () =>{
        setCurrentImageIndex((currentImageIndex+1) % imageUrls.length);
      }

      useEffect(() => {
        const interval = setInterval(nextImageIndex, 3000);
        console.log("changed");
        return () => clearInterval(interval);
      },[currentImageIndex])

      return (
        // <div className="w-100px h-100px flex justify-center align-top">
        //     <img src={imageUrls} alt="" />
        // </div>
        <div className="relative flex justify-center align-top mt-10">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={`${
              index === currentImageIndex ? 'opacity-1' : 'opacity-0'
            } transition-property: opacity transition ease-in-out delay-50`}
          >
            {index === currentImageIndex && <img src={imageUrl} alt={`Image ${index}`} className="object-contain h-80 w-150 rounded-lg"/>}
            
          </div>
        ))}
      </div>
      );
}
