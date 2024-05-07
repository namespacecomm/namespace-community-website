import React from 'react'

function Hackgallery({ images }) {
  return (
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
      <div className="md:p-2 p-1 w-full relative overflow-hidden rounded-lg transform transition duration-300 ">
      <img
    alt="gallery"
    className="w-full h-full object-cover object-center block rounded-lg  transform transition duration-300 hover:scale-105 hover:transform-origin-center"
    src={images[0].src}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 relative overflow-hidden rounded-lg transform transition duration-300">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block rounded-lg  transform transition duration-300 hover:scale-105 hover:transform-origin-center"
            src={images[2].src}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2 relative overflow-hidden rounded-lg transform transition duration-300">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block rounded-lg  transform transition duration-300 hover:scale-105 hover:transform-origin-center"
            src={images[5].src}
          />
        </div>
        
      </div>
      <div className="flex flex-wrap w-1/2">
        
        <div className="md:p-2 p-1 w-1/2 relative overflow-hidden rounded-lg transform transition duration-300">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block rounded-lg  transform transition duration-300 hover:scale-105 hover:transform-origin-center"
            src={images[3].src}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2 relative overflow-hidden rounded-lg transform transition duration-300 ">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block rounded-lg  transform transition duration-300 hover:scale-105 hover:transform-origin-center"
            src={images[4].src}
          />
        </div>
        <div className="md:p-2 p-1 w-full relative overflow-hidden rounded-lg transform transition duration-300">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center block rounded-lg  transform transition duration-300 hover:scale-105 hover:transform-origin-center"
            src={images[1].src}
          />
        </div>
      </div>
    </div>
  )
}

export default Hackgallery