import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedCard.css'; // Import custom CSS file

const AnimatedCard = ({ img, title, date, description }) => {
  return (
    <motion.div
      className="card-container bg-blue-1000 rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 }}
      whileHover={{ rotate: 0, scale: 1.05, y: -5 }} 
    >
      <div className="card-inner relative">
        {/* Front Side of the Card */}
        <div className="card-front">
          {/* Image with Glow Effect */}
          <div className="image-container relative w-full">
            {img ? (
              <img src={img} alt={`${title} - achiever image`} className="card-image w-full h-auto object-cover" />
            ) : (
              <div className="no-image bg-gray-300 flex justify-center items-center h-40">
                <span>No Image</span>
              </div>
            )}
            <div className="image-overlay absolute top-0 left-0 right-0 bottom-0"></div>
          </div>

          {/* Name with Enhanced Typography */}
          <h3 className="card-title text-white text-center mt-2">{title}</h3>

          {/* Batch */}
          <p className="card-batch text-white text-center mb-2">{date}</p>
        </div>

        {/* Back Side of the Card */}
        <div className="card-back absolute top-0 left-0 w-full h-full bg-blue-1000 p-4 flex items-center justify-center">
          {/* Achievements with Styling */}
          <div className="achievements text-white">
            {description.split('|').map((achievement, index) => (
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
