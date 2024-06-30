import React from "react";
import aboutImg from "../assets/about.jpg";
import { ACHIEVE, SKILL } from "../index";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        Skills and Achievements
      </h1>
      <div className="flex flex-wrap">
        <motion.div whileInView={{opacity:1 , x:0}} initial={{x:-100, opacity:0}} transition={{duration:0.5}} className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-lg h-80" src={aboutImg} alt="about image"></img>
          </div>
        </motion.div>
        <motion.div whileInView={{opacity:1 , x:0}} initial={{x:100, opacity:0}} transition={{duration:0.5}} className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center lg:justify-start mr-10">
            <p className="my-2 max-w-xl py-6 text-justify">{SKILL}</p>
            <p className="my-2 max-w-xl py-6 text-justify">{ACHIEVE}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
