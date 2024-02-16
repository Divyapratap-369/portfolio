import React from "react";

function Middle() {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24
    flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <h3 className="text-lg font-titleFont tracking-wide text-textGreen">
        Hi, my name is
      </h3>
      <h1 className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col">
        Divya Pratap Singh,{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the Web.
        </span>
      </h1>
      <p className="text-base md:max-w-[650px] text-textDark font-medium">
        
        I am a software developer specialized in building (and occasionally designing)
        exceptional digital experiences. Currently, I am focused on building accessible,
        human-centered products at. {" "}<span className="text-textGreen inline-flex relative cursor-pointer h-7
        overflow-x-hidden group">DXC Technology
        <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] 
        group-hover:translate-x-0 transition-transform duration-500"></span>
        </span>
      </p>
      <button className="w-52 h-14 text-sm font-titleFont border border-textGreen
      rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">Check out my project!</button>
    </section>
  );
}

export default Middle;
