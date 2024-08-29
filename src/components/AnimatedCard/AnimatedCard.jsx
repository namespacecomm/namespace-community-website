import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedCard.css'; // Import custom CSS file

const AnimatedCard = ({ img, title, date, description }) => {
  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 }}
      whileHover={{ rotate: 0, scale: 1.1, y: -5 }}
    >
      <div className="card-inner">
        {/* Front Side of the Card */}
        <div className="card-front">
          {/* Image with Glow Effect */}
          <div className="image-container">
            {img ? (
              <img src={img} alt={`${title} - achiever image`} className="card-image" />
            ) : (
              <div className="no-image">
                <span>No Image</span>
              </div>
            )}
            <div className="image-overlay"></div>
          </div>

          {/* Name with Enhanced Typography */}
          <h3 className="card-title">{title}</h3>

          {/* Batch */}
          <p className="card-batch">{date}</p>
        </div>

        {/* Back Side of the Card */}
        <div className="card-back">
          {/* Achievements with Styling */}
          <div className="achievements">
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
