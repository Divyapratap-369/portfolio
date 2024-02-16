import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { FileOrganizer, project1img } from '@/public/assets/images'
import { VscGithubAlt } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";
const projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03." />
      {/* Project 1 */}
      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
        <div
          className="w-full flex flex-col items-center justify-center
      gap-20 mt-10"
        >
          <div className="flex flex-col xl:flex-row gap-6">
            <a className="w-full xl:w-1/2 h-auto relative group" href="">
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md"
                  src={project1img}
                  alt="project1 image"
                />
              </div>
            </a>
            <div
              className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end text-right xl:-ml-16 z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Live Code Editor</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A Live code Editor website in which you can type your html, css
                and JavaScript code and see the output on the go as you type
                created using the same technologies but with a powerful featured
                emmet and code completion api made using html5, css and
                JavaScript.
                <span className="text-textGreen">O-auth </span>and made the
                change on the go.
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
          md:gap-5 justify-between text-textDark"
              >
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a href="" className="hover:text-textGreen duration-300">
                  <VscGithubAlt />
                </a>
                <a href="" className="hover:text-textGreen duration-300">
                  <GoLinkExternal />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div
          className="w-full flex flex-col items-center justify-center
      gap-20 mt-10"
        >
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a className="w-full xl:w-1/2 h-auto relative group" href="">
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md"
                  src={FileOrganizer}
                  alt="project1 image"
                />
              </div>
            </a>
            <div
              className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end text-right z-10"
            >
              <p className="font-titleFont xl:mr-[30rem] text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl xl:mr-[27rem] font-bold">
                File Organizer
              </h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md text-left">
                A Live code Editor website in which you can type your html, css
                and JavaScript code and see the output on the go as you type
                created using the same technologies but with a powerful featured
                emmet and code completion api made using html5, css and
                JavaScript.
                <span className="text-textGreen">O-auth </span>and made the
                change on the go.
              </p>
              <ul
                className="text-xs md:text-sm xl:mr-[30rem] font-titleFont tracking-wide flex gap-2
          md:gap-5 justify-between text-textDark"
              >
                <li>Vs Code</li>
                <li>Python</li>
              </ul>
              <div className="text-2xl xl:mr-[34rem] flex gap-4">
                <a href="" className="hover:text-textGreen duration-300">
                  <VscGithubAlt />
                </a>
                <a href="" className="hover:text-textGreen duration-300">
                  <GoLinkExternal />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div
          className="w-full flex flex-col items-center justify-center
      gap-20 mt-10"
        >
          <div className="flex flex-col xl:flex-row gap-6">
            <a className="w-full xl:w-1/2 h-auto relative group" href="">
              <div>
                <Image
                  className="w-full h-full object-contain rounded-md"
                  src={project1img}
                  alt="project1 image"
                />
              </div>
            </a>
            <div
              className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end text-right xl:-ml-16 z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Live Code Editor</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A Live code Editor website in which you can type your html, css
                and JavaScript code and see the output on the go as you type
                created using the same technologies but with a powerful featured
                emmet and code completion api made using html5, css and
                JavaScript.
                <span className="text-textGreen">O-auth </span>and made the
                change on the go.
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
          md:gap-5 justify-between text-textDark"
              >
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a href="" className="hover:text-textGreen duration-300">
                  <VscGithubAlt />
                </a>
                <a href="" className="hover:text-textGreen duration-300">
                  <GoLinkExternal />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default projects