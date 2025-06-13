import { useState } from 'react'
import back from"./assets/pot.png"
import pro from './assets/pro2.png'
import logo from"./assets/off-logo.png"
import { motion, useInView } from 'framer-motion'
import { HiMenuAlt1 } from 'react-icons/hi';
import { useRef } from "react"
import { BiPhone, BiX } from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa'
import { CgInstagram, CgTwitter } from 'react-icons/cg'
import { SiGmail } from 'react-icons/si'
import { BsPhoneFill, BsTwitterX } from 'react-icons/bs'
import { HiPhone } from 'react-icons/hi2'
import { FaX } from 'react-icons/fa6'
import { GoX } from 'react-icons/go'




const Home = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <div className="relative text-gray-900 dark:text-gray-900 h-dvh overflow-y-auto justify-evenly w-full">
        <img src={back} className="h-full overflow-y-auto w-full"/>
    <div className="flex justify-center h-full absolute top-0 left-0 overflow-y-auto w-full">
        <div className=" p-4 w-full">
        <div className="flex bg-white bg-opacity-50 w-full z-50 top-0 fixed text-gray-800 flex-row gap-3 sm:gap-8 justify-end  px-8 py-3">
            <a href="#intro" className="font-semibold sm:font-normal font-headings text-lg">Introduction</a>
            <a href="#projects" className="font-semibold sm:font-normal font-headings text-lg">Projects</a>
            <a href="#contacts" className="font-semibold sm:font-normal font-headings text-lg">Contacts</a>
        </div>
            <motion.div  id="intro" className="flex flex-col place-items-center sm:items-end mx-6 sm:mx-12 my-36">
                <div className="size-36 flex justify-center place-items-center bg-gray-400 mb-12 rounded-full outline outline-green-900 sm:mb-16 outline-offset-0">
                 <img src={pro} className="size-32 rounded-full"/>
                </div>
                
                <h1 className="font-headings text-4xl sm:text-6xl text-center  sm:text-end">Hi, I'm Nassir</h1>
                <p className="sm:text-lg sm:font-poppins text-center sm:text-end font-light sm:font-normal text-xl my-4 text-gray-900">
                    I am a self-taught Mobile and Web Apps Developer,<br/> Highly passionate about technologies,A Civil Engineer by profession.<br/>
                     For Web and Mobile Apps Design,
                      Consultancy and Creation feel free to reach me. </p>
            </motion.div>  
            <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }} id="projects" className="mt-12 mb-44  flex flex-col place-items-center sm:place-items-end mx-6 sm:m-12">
                <h1 className="font-bold my-6 text-2xl font-headings text-center sm:text-end text-gray-900">Projects</h1>
                <p className=" text-gray-900 text-center sm:font-poppins flex items-center sm:text-end text-xl sm:text-md font-light sm:font-normal">
                    Proudly creator and a Co-founder of GrandyPOS, Job-linkersTz and BraveTech Innovations Group.
                </p>
               <a className="sm:h-28 sm:w-56 h-24 w-48 m-8 sm:my-2 flex place-items-center">
                  <img src={logo}  className=""/>
               </a>

            </motion.div>    
            <motion.div ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }} id="contacts" className="flex flex-col sm:justify-end pb-24 sm:my-36 ">
                <p className="text-center sm:text-end m-12 text-2xl font-semibold font-headings">
                    Contact me.</p>
                <div className="flex flex-row gap-6 justify-center mx-12">
                <SiGmail className="text-2xl"/>
                <HiPhone className="text-2xl"/>
                <a href="https://wa.me/255627861124/">
                  <FaWhatsapp className="text-2xl"/>
                </a>
                <BsTwitterX className="text-2xl"/>
                </div>
               
            </motion.div>
        </div>
        </div>
        </div>
    )
}

export default Home