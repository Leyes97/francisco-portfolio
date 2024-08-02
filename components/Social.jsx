import Link from 'next/link';

import { FaGithub, FaLinkedinIn, FaYoutube,  } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaLinkedinIn />, path: '' },
  { icon: <FaYoutube />, path: '' },
  { icon: <FaXTwitter />, path: '' },
];

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}
        </Link>
    })}
  </div>;
};

export default Social;
