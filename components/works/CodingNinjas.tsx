import React from 'react'
import { MdOutlinePlayArrow } from 'react-icons/md';
const CodingNinjas = () => {
  return (
    <div>
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Teaching Assistant
        <span className="text-textGreen tracking-wide">@Coding Ninjas</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2022 - Feb 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark max-w-82">
          <span className="text-textGreen mt-1    ">
            <MdOutlinePlayArrow />
          </span>
          Write modern, performant, maintainable code for a diverse array of
          client and internal projects
        </li>
        <li className="text-base flex gap-2 text-textDark max-w-82">
          <span className="text-textGreen mt-1    ">
            <MdOutlinePlayArrow />
          </span>
          Write modern, performant, maintainable code for a diverse array of
          client and internal projects
        </li>
        <li className="text-base flex gap-2 text-textDark max-w-82">
          <span className="text-textGreen mt-1    ">
            <MdOutlinePlayArrow />
          </span>
          Write modern, performant, maintainable code for a diverse array of
          client and internal projects
        </li>
      </ul>
    </div>
  );
}

export default CodingNinjas