'use client';

import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] overflow-hidden flex items-center justify-center bg-primary">
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        fill="transparent"
        viewBox="0 0 506 506">
        <motion.path
          d="
            M 253 50 
            L 400 253 
            L 253 456 
            L 106 253 
            Z
          "
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.8 }}
          animate={{ pathLength: 1, opacity: [0.8, 1, 0.8], rotate: [0, 360] }}
          transition={{ duration: 8, repeat: 0 }}
        />

        {/* Bottom Facets */}
        <motion.path
          d="
            M 253 253
            L 306 306 
            L 200 400 
            Z
          "
          stroke="#ffffff "
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ pathLength: 1, opacity: [0.5, 1, 0.5], rotate: [0, 360] }}
          transition={{ duration: 8, repeat: 0 }}
        />

        {/* Left Facets */}
        <motion.path
          d="
            M 253 253 
            L 253 150 
            L 356 356 
            Z
          "
          stroke="#ffffff "
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ pathLength: 1, opacity: [0.5, 1, 0.5], rotate: [0, 360] }}
          transition={{ duration: 8, repeat: 0 }}
        />

        {/* Right Facets */}
        <motion.path
          d="
            M 253 253 
            L 150 150 
            L 356 356 
            Z
          "
          stroke="#ffffff "
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ pathLength: 1, opacity: [0.5, 1, 0.5], rotate: [0, 360] }}
          transition={{ duration: 8, repeat: 0 }}
        />
      </motion.svg>
    </div>
  );
};

export default Logo;
