import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ img, title, date, description }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-900 shadow-lg rounded-xl p-8 my-4 w-full flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
      style={{ maxWidth: '600px', minHeight: '500px', height: '500px' }} // Fixed height
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      {/* Image or Placeholder */}
      <div className="rounded-full overflow-hidden w-32 h-32 mb-6 border-4 border-indigo-400">
        {img ? (
          <img src={img} alt={`${title} - achiever image`} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="text-white text-xl">No Image</span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-center text-3xl font-bold mt-2 text-white">{title}</h3>

      {/* Batch */}
      <p className="text-center text-lg text-gray-300 mb-4">{date}</p>

      {/* Achievements */}
      <div
        className="text-center text-white mt-4 text-xl overflow-auto"
        style={{ maxHeight: '100px' }} // Set a max height and overflow-auto for scrollbar
      >
        {description.split('|').map((achievement, index) => (
          <p key={index}>{achievement.trim()}</p>
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
