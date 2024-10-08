'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
//components
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'project 1',
    description:
      'This is a frontend project that uses the Dragon Ball Z (DBZ) API to display different types of data. The project is built with Next.js, Tailwind CSS, and Framer Motion, featuring various components to dynamically and attractively visualize the information received from the API.',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind.css' },
      { name: 'Framer-motion' },
    ],
    image: '/assets/work/DBZAPI.png',
    live: 'https://dbz-api-one.vercel.app/',
    github: 'https://github.com/Leyes97/dbz-api',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'project 2',
    description:
      'This project is my portfolio, created to showcase all my work. It was developed using Next.js, Tailwind CSS, and Framer Motion, with a focus on building a dynamic, modern interface featuring smooth animations and responsive design.',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind.css' },
      { name: 'Framer-motion' },
    ],
    image: '/assets/work/Portfolio.png',
    live: 'https://francisco-portfolio-tan.vercel.app/',
    github: 'https://github.com/Leyes97/francisco-portfolio',
  },
  {
    num: '03',
    category: 'FullStack',
    title: 'project 2',
    description:
      'This project is in development, we will soon have a Movie Trailers Page',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind.css' },
      { name: 'Framer-motion' },
      { name: 'Node.js' },
      { name: 'Postgresql' },
      { name: 'Sequelice' },
      { name: 'Express' },
    ],
    image: '/assets/work/cs.png',
    live: 'https://youtu.be/Y4G8s4_dwUE?si=X-Q0YV6MfIOpcSj8',
    github: 'https://github.com/Leyes97/tmdbBack',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/*project description*/}
              <p className="text-white/60">{project.description}</p>
              {/*stack*/}
              <ul className="flex  flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/*remove the last comma */}
                      {index !== project.stack.length - 1 ? ',' : '.'}
                    </li>
                  );
                })}
              </ul>
              {/*border */}
              <div className="border border-white/20"></div>
              {/*buttons */}
              <div className="flex items-center gap-4">
                {/*live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover "
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
