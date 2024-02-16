import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { MdOutlinePlayArrow } from "react-icons/md";
import myImage from "@/public/assets/images/myImg.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32
    flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01." />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div
          className="w-full lgl:w-2/3 text-base text-textDark font-medium flex 
                flex-col gap-4"
        >
          <p>
            Hello! My Name is Divya Pratap Singh and I enjoy creating things
            that live on the internet. My Interest in web development started
            back in 2017 when i decided to try editing custom Tumblr themes -
            turns out hacking together a custom reblog button taught me a lot
            about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I had the privilige of working at an
            advertising agency, a start-up,
            <span className="text-textGreen">
              a huge corporation, and a student-led design studio{" "}
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            nobis expedita ad ducimus adipisci maiores dolorem quas fuga!
            Numquam in eaque maxime voluptate recusandae atque odit nisi natus
            error ullam.
            <span className="text-textGreen"> ab natus possium</span>
          </p>
          <p>Here are a few Technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlinePlayArrow />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlinePlayArrow />
              </span>
              JavaScript(ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlinePlayArrow />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlinePlayArrow />
              </span>
              C++
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlinePlayArrow />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlinePlayArrow />
              </span>
              python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlinePlayArrow />
              </span>
              postgres
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <MdOutlinePlayArrow />
              </span>
              Express
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image className="rounded-lg w-80 h-full object-cover"
              src={myImage}
              alt="MyImage"/>
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20
              rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden absolute -right-6 -bottom-6 lgl:inline-flex w-full h-80 border-2 border-textGreen
            rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2
            transition-transform duration-300  "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
