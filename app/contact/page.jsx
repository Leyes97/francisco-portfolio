'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+54) 9 1159987557',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'Francisco.leyescampoy@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Luis Guillon',
  },
];

import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.submit();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="w-full xl:w-[54%] order-2 xl:order-none">
            <form
              action="https://formspree.io/f/xbjbaook"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-6 sm:p-8 md:p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl sm:text-4xl text-accent">
                {"Let's work together"}
              </h3>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  className="flex h-[40px] sm:h-[48px] rounded-md border border-white/10 bg-primary px-4 text-sm sm:text-base placeholder:text-white/60 focus:border-accent outline-none"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  className="flex h-[40px] sm:h-[48px] rounded-md border border-white/10 bg-primary px-4 text-sm sm:text-base placeholder:text-white/60 focus:border-accent outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="flex h-[40px] sm:h-[48px] rounded-md border border-white/10 bg-primary px-4 text-sm sm:text-base placeholder:text-white/60 focus:border-accent outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="flex h-[40px] sm:h-[48px] rounded-md border border-white/10 bg-primary px-4 text-sm sm:text-base placeholder:text-white/60 focus:border-accent outline-none"
                />
              </div>
              {/* Select */}
              <Select name="service">
                <SelectTrigger className="w-full text-sm sm:text-base">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="fullstack">FullStack</SelectItem>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                className="h-[150px] sm:h-[200px] text-sm sm:text-base"
                name="message"
                placeholder="Type your message here."
              />
              <Button type="submit" size="md" className="max-w-[150px]">
                Send message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8 sm:gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4 sm:gap-6">
                    <div className="w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[20px] sm:text-[28px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base text-white/60">
                        {item.title}
                      </p>
                      <h3 className="text-lg sm:text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
