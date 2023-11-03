import React from 'react'

export default function Item(props) {
    // const image = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-pink_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=1693063155178;'
    const image = props.image[0]
    return (
      <div className="bg-white shadow-lg rounded-lg w-64 md:w-72 overflow-hidden mt-10">
        <img src={image} alt={props.category} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{props.name}</h2>
          <p className="text-gray-500 mb-2">{props.category}</p>
          <p className="text-gray-600 text-sm">
            {props.description.length > 10
              ? `${props.description.slice(0, 30)}...`
              : props.description}
          </p>
          <div className="mt-4">
            <p className="text-lg font-semibold">₹{props.price}</p>
          </div>
        </div>
      </div>
    );
    
}
