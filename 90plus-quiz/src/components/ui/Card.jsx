import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  onClick, 
  className = '',
  interactive = false,
  ...props 
}) => {
  const baseStyles = 'bg-gray-800 rounded-xl p-4 shadow-lg';
  const interactiveStyles = interactive ? 'cursor-pointer hover:shadow-xl transition-shadow duration-200' : '';

  const cardVariants = {
    hover: { scale: interactive ? 1.02 : 1 },
    tap: { scale: interactive ? 0.98 : 1 }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={`${baseStyles} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
