'use client';

import { motion } from 'framer-motion';

const Photo = () => {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] overflow-hidden flex items-center justify-center bg-primary">
      {/* Circle */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="253"
          cy="253"
          r="200"
          stroke="#ffe033"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            strokeDasharray: [
              '30 250 322 122',
              '15 12 125 425',
              '30 250 22 22',
              '1000 0',
            ],
            scale: 1,
            opacity: 0.8,
          }}
          animate={{
            strokeDasharray: [
              '30 250 322 122',
              '15 12 125 425',
              '30 250 22 22',
              '1000 0',
            ],
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
