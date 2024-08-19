'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiFirebase,
  SiSiBootstrap,
} from 'react-icons/si';

//about data
const about = {
  title: 'About me',
  description:
    "I'm a dedicated Full Stack Developer with a passion for creating scalable, efficient, and user-friendly web applications. With expertise in modern JavaScript frameworks like React.js and Next.js, and a strong background in backend technologies like Node.js, I focus on delivering seamless and secure solutions. I’m a quick learner, always exploring new tools and approaches to stay ahead in the tech world. Collaboration and clear communication are at the core of my work, helping me contribute effectively to any project",
  info: [
    {
      fieldName: 'Name',
      FieldValue: 'Francisco Leyes',
    },
    {
      fieldName: 'Experience',
      FieldValue: '3 Years',
    },
    {
      fieldName: 'Discord',
      FieldValue: 'frano.97',
    },
    {
      fieldName: 'Nationality',
      FieldValue: 'Argentine',
    },

    {
      fieldName: 'Freelance',
      FieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      FieldValue: 'Spanish, English',
    },
    {
      fieldName: 'Email',
      FieldValue: 'Francisco.leyescampoy@gmail.com',
    },
  ],
};

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    'I began my professional journey in late 2022 with an internship at Itesa Innovations Company, where I gained valuable hands-on experience. In 2023, I continued to grow my skills during an internship at UMA Salud, contributing to impactful projects and further developing my expertise in the field.',
  items: [
    {
      company: 'UMA Salud',
      position: 'Full Stack Developer.',
      duration: '2023',
    },
    {
      company: 'Itesa Inovation Company.',
      position: 'Full Stack Developer',
      duration: 'Summer 2022-2023',
    },
  ],
};

//education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    "Since starting my programming journey in 2021, I’ve developed a strong foundation in full stack development. I've focused on building responsive and efficient web applications, continuously learning and growing as a developer. My passion for problem-solving drives me to deliver quality solutions and contribute effectively to every project.",
  items: [
    {
      institution: 'Plataforma 5',
      degree: ' Java Script Bootcamp, Full Stack Developer.',
      duration: '2022',
    },
    {
      institution: 'FreeCodeCamp',
      degree: 'Frontend Java Script',
      duration: '2021',
    },
    {
      institution: 'Udemy',
      degree: 'HTML - CSS',
      duration: '2021',
    },
  ],
};

//skills data
const skills = {
  title: 'My Skills',
  description:
    'Since beginning my programming journey in 2022, I’ve developed strong skills across a range of technologies. My experience includes working with modern frameworks, backend systems, and database management. I’ve applied these skills in various projects and internships, continuously expanding my technical expertise and adapting to new tools and methodologies. ',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javaScript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <FaNodeJs />,
      name: 'node js',
    },
    {
      icon: <SiPostgresql />,
      name: 'Postgresql',
    },
    {
      icon: <SiFirebase />,
      name: 'Firebase',
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { delay, motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/*content */}
          <div className="min-h-[70vh] w-full">
            {/*experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dat */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dat */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px] overflow-auto">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <ScrollArea className="max-w-[600px] mx-auto xl:mx-0 h-[150px] overflow-y-auto text-white/60">
                  <p>{about.description}</p>
                </ScrollArea>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.FieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
