import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeStyles = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        className={`relative ${sizeStyles[size]}`}
      >
        {/* Outer spinning ring */}
        <motion.div
          className={`absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent ${sizeStyles[size]}`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        {/* Inner pulsing circle */}
        <motion.div
          className={`absolute inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        {/* Center dot */}
        <motion.div
          className="absolute inset-[35%] rounded-full bg-white shadow-lg"
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
