import React from 'react'
import ArchiveCard from './ArchiveCard'
import { useState } from 'react';
import {motion} from "framer-motion"
const Archive = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          View the Archive
        </p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10
        lgl:px-10"
      >
        <ArchiveCard
          title="To do list"
          des="lorem ipsum dolor sit amet consectetur adiposcing elit.
            Culpa laudantium velit qui sint non, voluptates quo a veritatis.
            ."
          listItem={["React.js", "Tailwind CSS", "node js"]}
        />
        <ArchiveCard
          title="Educare English Learning Academy"
          des="lorem ipsum dolor sit amet consectetur adiposcing elit.
            Culpa laudantium velit qui sint non, voluptates quo a veritatis.
            ."
          listItem={["React.js", "Tailwind CSS", "getform.ios"]}
        />
        <ArchiveCard
          title="Notes App"
          des="lorem ipsum dolor sit amet consectetur adiposcing elit.
            Culpa laudantium velit qui sint non, voluptates quo a veritatis.
            ."
          listItem={["React.js", "Tailwind CSS", "node js"]}
        />
        <ArchiveCard
          title="To do list"
          des="lorem ipsum dolor sit amet consectetur adiposcing elit.
            Culpa laudantium velit qui sint non, voluptates quo a veritatis.
            ."
          listItem={["React.js", "Tailwind CSS", "node js"]}
        />
        <ArchiveCard
          title="To do list"
          des="lorem ipsum dolor sit amet consectetur adiposcing elit.
            Culpa laudantium velit qui sint non, voluptates quo a veritatis.
            ."
          listItem={["React.js", "Tailwind CSS", "node js"]}
        />
        <ArchiveCard
          title="To do list"
          des="lorem ipsum dolor sit amet consectetur adiposcing elit.
            Culpa laudantium velit qui sint non, voluptates quo a veritatis.
            ."
          listItem={["React.js", "Tailwind CSS", "node js"]}
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="To do list"
                des="lorem ipsum dolor sit amet consectetur adiposcing elit.
            Culpa laudantium velit qui sint non, voluptates quo a veritatis.
            ."
                listItem={["React.js", "Tailwind CSS", "node js"]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="To do list"
                des="lorem ipsum dolor sit amet consectetur adiposcing elit.
            Culpa laudantium velit qui sint non, voluptates quo a veritatis.
            ."
                listItem={["React.js", "Tailwind CSS", "node js"]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="To do list"
                des="lorem ipsum dolor sit amet consectetur adiposcing elit.
            Culpa laudantium velit qui sint non, voluptates quo a veritatis.
            ."
                listItem={["React.js", "Tailwind CSS", "node js"]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="To do list"
                des="lorem ipsum dolor sit amet consectetur adiposcing elit.
            Culpa laudantium velit qui sint non, voluptates quo a veritatis.
            ."
                listItem={["React.js", "Tailwind CSS", "node js"]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="To do list"
                des="lorem ipsum dolor sit amet consectetur adiposcing elit.
            Culpa laudantium velit qui sint non, voluptates quo a veritatis.
            ."
                listItem={["React.js", "Tailwind CSS", "node js"]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="To do list"
                des="lorem ipsum dolor sit amet consectetur adiposcing elit.
            Culpa laudantium velit qui sint non, voluptates quo a veritatis.
            ."
                listItem={["React.js", "Tailwind CSS", "node js"]}
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border
        border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border
        border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default Archive