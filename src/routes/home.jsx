import { useState } from 'react'
import back from"./assets/pot.png"
import pro from './assets/pro.jpg'
import { Facebook, FacebookOutlined, FacebookSharp, FacebookTwoTone, Instagram, Phone, WhatsApp, X } from '@mui/icons-material'
import vid from "./assets/vid.mp4"
import logo from"./assets/off-logo.png"
import { motion, useInView } from 'framer-motion'
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
 } from "@/components/ui/drawer"
import { HiMenuAlt1 } from 'react-icons/hi';

const Menuu = () => {

  return (
  <DrawerRoot placement="end">
  <DrawerBackdrop/>
  <DrawerTrigger asChild>
  <HiMenuAlt1/>
  </DrawerTrigger>
  <DrawerContent
   roundedRight={13}
   w="16rem"
   className="bg-[#fdfdfd]">
  <DrawerHeader>
  <DrawerTitle></DrawerTitle>
  </DrawerHeader>
  <DrawerBody>
  <div className="flex flex-col py-12 place-items-end space-y-8">
    <p className="font-headings text-3xl">Introduction</p>
    <p className="font-headings text-3xl">Projects</p>
    <p className="font-headings text-3xl">Contacts</p>
  </div>
  </DrawerBody>
  <DrawerFooter>
  </DrawerFooter>
  <DrawerCloseTrigger />
  </DrawerContent>
  </DrawerRoot>
  );
  }
import { useRef } from 'react'
const Home = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <div className="relative h-dvh overflow-y-auto w-full">
        <img src={back} className="h-full overflow-y-auto w-full"/>
    <div className="flex justify-center h-full absolute top-0 left-0 overflow-y-auto w-full">
        <div className=" p-4  w-full">
        <div className="flex bg-white bg-opacity-50 w-full z-50 top-0 fixed text-gray-800 flex-row gap-3 sm:gap-8 justify-end  px-8 py-3">
            <a href="#intro" className="font-semibold sm:font-normal font-headings text-lg">Introduction</a>
            <a href="#projects" className="font-semibold sm:font-normal font-headings text-lg">Projects</a>
            <a href="#contacts" className="font-semibold sm:font-normal font-headings text-lg">Contacts</a>
        </div>
            <motion.div  id="intro" className="flex flex-col place-items-center sm:items-end mx-6 sm:mx-12 mb-48 mt-12">
                <img src={pro} className="sm:size-36 size-28 mt-6 mb-12 rounded-full outline outline-green-900 sm:mb-16 outline-offset-2"/>
                <h1 className="font-headings text-4xl sm:text-6xl text-center  sm:text-end">Hi, I'm Nassir</h1>
                <p className="sm:text-lg  text-center sm:text-end font-light sm:font-semibold text-xl my-4 text-gray-900">
                    I am a self-taught Mobile and Web Apps Developer,<br/> Highly passionate about technologies and A Civil Engineer by profession.<br/>
                     For Web and Mobile Apps Design,
                      Consultation and Creation feel free to reach me. </p>
            </motion.div>  
            <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }} id="projects" className="mt-12 mb-44 place-items-end flex flex-col mx-6 sm:m-12">
                <h1 className="font-bold my-6 text-2xl font-headings text-start text-gray-900">Projects</h1>
                <p className=" text-gray-900 text-center sm:text-start text-xl font-light sm:font-medium">
                    I am a creative web and mobile app developer, a Co-founder of GrandyPOS system and BraveTech Innovations.
                </p>
               
               <a className="sm:h-28 sm:w-56 h-24 w-48 m-8 sm:my-2 flex justify-end">
                  <img src={logo} />
               </a>

            </motion.div>    
            <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }} id="contacts" className="flex flex-col sm:justify-end pb-24 sm:m-12 ">
                <p className=" text-end m-12 text-xl font-semibold font-headings">
                    Contact me.</p>
                <div className="flex flex-col place-items-end mx-12 space-y-4">
                <p className="sm:font-headings font-light text-lg underline">nassiramir2014@gmail.com</p>
                <div className="flex">
                    <p className="font-semibold">+255-775861124</p>
                    <Phone/>
                </div>
                <WhatsApp/>
                <Instagram/>
                <X/>
                </div>
               
            </motion.div>
        </div>
        </div>
        </div>
    )
}

export default Home