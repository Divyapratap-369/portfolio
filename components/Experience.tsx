import React from 'react'
import { useState } from 'react'
import SectionTitle from './SectionTitle'
import DXC from "./works/DXC"
import Chegg from './works/Chegg'
import CodingNinjas from './works/CodingNinjas'
import ReactBD from './works/ReactBD'

const Experience = () => {
    const[workDXC, setWorkDXC] = useState(true);
    const[workCodingNinjas, setWorkCodingNinjas] = useState(false);
    const[workChegg, setWorkChegg] = useState(false);
    const[workReactBD, setWorkReactBD] = useState(false);

    const handleDXC = () => {
        setWorkDXC(true);
        setWorkCodingNinjas(false);
        setWorkChegg(false);
        setWorkReactBD(false);
    };

    const handleCodingNinjas = () => {
        setWorkDXC(false);
        setWorkCodingNinjas(true);
        setWorkChegg(false);
        setWorkReactBD(false);
    };

    const handleChegg = () => {
         setWorkDXC(false);
         setWorkCodingNinjas(false);
         setWorkChegg(true);
         setWorkReactBD(false);
    };

    const handleReactBD = () => {
        setWorkDXC(false);
        setWorkCodingNinjas(false);
        setWorkChegg(false);
        setWorkReactBD(true);
    };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02." />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleDXC}
            className={`${
              workDXC
                ? " border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
                duration-300 px-8 font-medium`}
          >
            DXC Technology
          </li>
          <li
            onClick={handleCodingNinjas}
            className={`${
              workCodingNinjas
                ? " border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
                duration-300 px-8 font-medium`}
          >
            Coding Ninjas
          </li>
          <li
            onClick={handleChegg}
            className={`${
              workChegg
                ? " border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
                duration-300 px-8 font-medium`}
          >
            Chegg
          </li>
          <li
            onClick={handleReactBD}
            className={`${
              workReactBD
                ? " border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
                duration-300 px-8 font-medium`}
          >
            ReactBD
          </li>
        </ul>
        {workDXC && <DXC />}
        {workCodingNinjas && <CodingNinjas />}
        {workChegg && <Chegg />}
        {workReactBD && <ReactBD />}
      </div>
    </section>
  );
}

export default Experience