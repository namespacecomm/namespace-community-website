import React from "react";

function EventCard({ date, name, img }) {
  return (
     <div className="px-2 w-full mb-10 cursor-pointer">
      <div className="flex flex-wrap flex-col-reverse h-full w-full hover:text-black sm:py-24 py-16 sm:px-10 px-6 relative">
        <img
          alt="gallery"
          className="w-full object-cover hover:object-contain h-full object-center block absolute inset-0 hover:opacity-25"
          src={img}
        />
          <h2 className="text-xl text-white text-center font-extrabold title-font mb-2">
            {name}
          </h2>
          <p className="leading-relaxed mb-10 text-center font-bold text-white">
            {date}
          </p>
      </div>
    </div> 
  );
}

export default EventCard;


