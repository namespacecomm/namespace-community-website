import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ img, title, date, description, imageAlignment }) => {
  return (
    <motion.div
      className={`bg-blue-900 shadow-card rounded-lg p-6 my-4 w-full min-h-[400px] flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow-white`}
      style={{ width: '600px', height: '85%' }}  
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      {/* Image */}
      {img && (
        <div>
          <img src={img} alt={title} className="w-32 h-36 object-cover rounded-full mx-auto" />
        </div>
      )}
      
      {/* Content */}
      <div className="flex-grow flex flex-col justify-between">
        <h3 className="text-center text-4xl font-semibold mt-4 text-white">{title}</h3>
        <p className="text-center text-lg text-gray-400">{date}</p>
        <div
          className="text-center text-white mt-4 text-xl"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
