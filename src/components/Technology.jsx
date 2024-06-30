import React from 'react'
import {RiReactjsLine} from 'react-icons/ri';
import {FaNodeJs} from 'react-icons/fa';
import {SiMongodb} from 'react-icons/si';
import {SiExpress} from 'react-icons/si';
import {SiPostgresql} from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb';
import { motion } from "framer-motion";

const iconVariant = (duration) =>({
  intial:{ y:-10 },
  animate:{
    y:[-10,10],
    transition:{duration:duration,repeat:Infinity,repeatType:"reverse",ease:"linear"}
  }
})

export default function Technology() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{opacity:1 ,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap justify-center items-center gap-4">
        <motion.div variants={iconVariant(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div variants={iconVariant(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-500' />
        </motion.div>
        <motion.div variants={iconVariant(3.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiExpress className='text-7xl text-yellow-500' />
        </motion.div>
        <motion.div variants={iconVariant(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-500' />
        </motion.div>
        <motion.div variants={iconVariant(2.7)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPostgresql className='text-7xl text-sky-700' />
        </motion.div>
        <motion.div variants={iconVariant(3.2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandNextjs className='text-7xl' />
        </motion.div>
      </motion.div>
    </div>
  )
}
