import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AnimatedCard.css"; // Import custom CSS file

const AnimatedCard = ({ img, title, date, description }) => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  return (
    <motion.div
      className="overflow-hidden rounded-lg shadow-lg card-container bg-blue-1000"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 }}
      whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
    >
      <div className="relative card-inner">
        {/* Front Side of the Card */}
        <div className="card-front">
          {/* Image with Glow Effect */}
          <div className="relative w-full image-container">
            {img && !hasError ? (
              <img
                src={img}
                alt={`${title} - achiever image`}
                className="object-cover w-full h-auto card-image"
                onLoad={() => setLoading(false)}
                onError={() => {
                  setLoading(false);
                  setHasError(true);
                }}
                style={{ display: loading ? "none" : "block" }}
              />
            ) : null}
            {loading && !hasError ? (
              <div className="flex items-center justify-center h-40 bg-gray-300 ">
                <span>No Image</span>
              </div>
            ) : hasError ? (
              <div className="flex items-center justify-center h-40 bg-gray-300 ">
                <span>Loading ...</span>
              </div>
            ) : (
              <div
                className="flex items-center justify-center h-40 bg-gray-300 "
                style={{ display: img ? "none" : "flex" }}
              >
                <span>No Image</span>
              </div>
            )}

            <div className="absolute top-0 bottom-0 left-0 right-0 image-overlay"></div>
          </div>

          {/* Name with Enhanced Typography */}
          <h3 className="mt-2 text-center text-white card-title">{title}</h3>

          {/* Batch */}
          <p className="mb-2 text-center text-white card-batch">{date}</p>
        </div>

        {/* Back Side of the Card */}
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-4 card-back bg-blue-1000">
          {/* Achievements with Styling */}
          <div className="text-white achievements">
            {description.split("|").map((achievement, index) => (
              <p key={index} className="achievement">
                {achievement.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="decorative-element"></div>
    </motion.div>
  );
};

export default AnimatedCard;
