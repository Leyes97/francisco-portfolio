'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] overflow-hidden flex items-center justify-center">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeInOut' },
        }}
        className="absolute w-full h-full rounded-full overflow-hidden mix-blend-difference">
        <Image
          src="/assets/francisco.cv.png"
          priority
          quality={100}
          fill
          alt=""
          className="object-cover"
        />
      </motion.div>

      {/* Circle */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="252"
          cy="252"
          r="252"
          stroke="#ffe033"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: '24 10 6 0' }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
