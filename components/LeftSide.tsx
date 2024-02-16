import React from 'react'
import {motion} from "framer-motion"
import { VscGithubAlt } from "react-icons/vsc";
import { TbBrandLeetcode } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";



function LeftSide() {
  return (
    <div
      className="w-full h-full flex flex-col items-center
    justify-end gap-4 text-textLight"
    >
      <div>
        <a href="https://github.com/Divyapratap-369" target="_blank">
          <span
            className='text-xl
                rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-1 transition-all duration-300"'
          >
            <VscGithubAlt />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Divyapratap-369" target="_blank">
          <span
            className='text-xl 
                rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-1 transition-all duration-300"'
          >
            <TbBrandLeetcode />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Divyapratap-369" target="_blank">
          <span
            className='text-xl 
                rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-1 transition-all duration-300"'
          >
            <SlSocialLinkedin />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Divyapratap-369" target="_blank">
          <span
            className='text-xl 
                rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-1 transition-all duration-300"'
          >
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Divyapratap-369" target="_blank">
          <span
            className='text-xl 
                rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-1 transition-all duration-300"'
          >
            <SlSocialYoutube />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
}

export default LeftSide;