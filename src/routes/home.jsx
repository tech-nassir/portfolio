import { useState } from 'react';
import logo from './assets/IMG-20241118-WA0012.jpg'
import pic2 from './assets/IMG-20250405-WA0028.jpg'
import pic3 from './assets/IMG-20241118-WA0014.jpg'
import pic4 from './assets/IMG-20241118-WA0015.jpg'
import pic5 from './assets/IMG-20241118-WA0016.jpg'
import Carousel from './Carousel'
import { AiFillYoutube } from "react-icons/ai";
import pic1 from './assets/IMG-20241118-WA0012.jpg'

const vids = [
    {
        id: 0,
        src: pic1,
        lik: "jobs junction kushirikiana na serikali kuwasaidia wafanyakazi"
    },
    {
        id: 1,
        src: pic2,
        lik: "Jobs junction kinara huduma kwa wateja na wwatumiaji"
    },
    {
        id: 2,
        src: pic3,
        lik: "jobs junction kuongea wafanyakazi kutanua wigo wa huduma zao"
    },
    {
        id: 3,
        src: pic5,
        lik: "jobs junction kushiriki katika kusaidia wanafunzi wanaosoma katika mazingira magumu"
    }
];
const Home = () => {
    return (
        <>
            <Carousel style={{ height: '300px' }} className="w-full relative bg-custom bg-cover  mb-40" />
            <div className="flex flex-col sm:flex-row space-x-0 justify-center z-2 mb-12">
                <div className="bg-red-800 px-4 text-gray-100 flex justify-center place-items-center h-60 w-full sm:w-96">
                    <div className='flex flex-col'>
                        <div className='text-2xl font-semibold font-poppins pb-8'>VERIFIED PROFESSIONALS  & EMPLOYERS</div>
                        <div className='sm:text-md font-poppins'>We source jobs directly from employers and active people looking for new jobs.
                            No duplicates. No spam....</div>
                    </div>
                </div>
                <div className="bg-yellow-500 px-4 h-60 flex w-full sm:w-96 place-items-center justify-center text-gray-100 ">
                    <div className='flex flex-col'>
                        <h className="text-2xl font-poppins font-semibold pb-8" >UP TO DATE JOBS</h>
                        <p className='sm:text-md font-poppins'>Our jobs are updated every single day so you can browse the most current listings available schools or qualified teache
                        </p>
                    </div>
                </div>
                <div className="bg-blue-700 px-4 text-gray-100 h-60 w-full sm:w-96 flex">
                    <div className='flex flex-col justify-center'>
                        <h className="text-2xl font-poppins font-semibold pb-8" >TRUSTED BY THOUSANDS.</h>
                        <p className="sm:text-md font-poppins"> Welcome to the platform trusted by thousands of employers and job seekers.</p>
                    </div>
                </div>
            </div>

            <div className="flex mx-auto flex-col sm:flex-row w-100 px-1 justify-center sm:space-x-0 items-center">
                <div className='bg-red-400 m-auto w-full sm:w-1/3 rounded-lg'>
                <img src={pic2} className='w-full h-72' /></div>
                <div className=' w-full sm:w-1/2 p-8'>
                    <p>EMPLOYEES NETWORKING CENTER</p>
                    <h2 className='font-bold font-poppins text-3xl'>JOBS’ JUNCTION</h2>
                    <p className=' font-poppins'>Jobs’ Junction is a software platform provided by jobs junction organisation with the main objective to eliminate unemployment for Teachers and Schools.
                        On one side we pave ways for professionals to dig up jobs of their need. On the second side is to help organisations or employers to have employees with their rank who can help them to
                        achieve their mission and visions with the competitive knowledge and strategies.

                        Jobs Junction is now here with Jobs’ Networking Centre to solve these problems between employers demands and
                        employees needs so that Organisations to get qualified employee(s) in accordance</p>


                </div>
            </div>
            <div className="pt-16 flex justify-center">
                <div className=" px-1flex flex-col place-items-center">
                    <p className='font-poppins text-3xl font-bold'>JOIN JOBS’ NETWORKING CENTER</p>
                    <p className="font-poppins text-lg text-justify sm:text-lg break-words mx-2 text-light">Organisations Get the right personnel. Professionals Get Hired</p>
                </div>

            </div>

            <div className="flex flex-col space-y-8 mx-4 sm:mx-16">
                <div className="flex items-center">
                    <div className='sm:h-8 h-4 w-4  sm:w-8 bg-purple-400 rounded-full p-2 justify-center place-items-center text-white mx-4'></div>
                    <div className="flex flex-col">
                        <h className="font-poppins text-xl font-bold">ABOUT US</h>
                        <p className='font-poppins sm:text-md break-words font-semilight'>Our the main objective to eliminate unemployment scarcity and barriers for Employees and Organisations. On one side we pave ways for Employees to dig up Jobs of their need</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className='sm:h-8 h-4 w-4  sm:w-8 p-2 bg-purple-400 rounded-full justify-center place-items-center text-white mx-4'></div>
                    <div className="flex flex-col">
                        <h className="font-poppins text-xl font-bold">OUR MISSION</h>
                        <p className='font-poppins font-semilight sm:text-md'>Our the main objective to eliminate unemployment for Employees and Organisations. On one side we pave ways for Employees to dig up Job Vacancies of their Need</p>
                    </div>
                </div>
                <div className="flex items-center">
                 <div className='sm:h-8 h-4 w-4  sm:w-8 p-2 bg-purple-400 rounded-full text-white mx-4'></div>
                    <div className="flex flex-col">
                        <h className="font-poppins text-xl font-bold">OUR VISION</h>
                        <p className='font-poppins font-semilight break-words sm:text-md'>Our the main objective to eliminate unemployment for Employees and Employers
                            s. On one side we pave ways for Professionals looking for employment to dig up Jobs of their Need</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-8 text-lg sm:text-lg sm:flex-row sm:space-x-4  justify-center">
                <div className=" sm:border-r my-12 border-rose-800 h-48 px-2 space-y-4 w-full sm:w-96 flex flex-col justify-center place-items-center">
                    <div className="h-12 w-12 rounded-lg bg-red-700"> <img src={logo} className='w-fit h-full rounded-lg' /></div>
                    <h className="font-poppin font-semibold sm:text-xl">JOB ASSISTANCE PORTAL</h>
                    <p className="sm:text-sm text-center font-poppins">We help Organisatins demands and employees needs so that organisations to get qualified employee(s) in accordance</p>

                </div>
                <div className=" sm:border-r my-12 mb-5 border-blue-800 flex space-y-4 flex-col justify-center place-items-center h-48 w-full px-2 sm:w-96">
                    <div className="h-12 w-12 rounded-lg bg-red-700"> <img src={logo} className='w-fit h-full rounded-lg' /></div>
                    <h className="font-poppins font-semibold sm:text-xl">WE HELP EMPLOYMENT SEEKERS</h>
                    <p className="font-poppins text-center sm:text-sm"> We help employees to find a job Vacancies of his/her desire on time in preferred location under open agreement between.</p>
                </div>
                <div className=" flex flex-col w-full my-12 justify-center px-2 space-y-4 place-items-center h-48 sm:w-96">
                    <div className="h-12 w-12 rounded-lg bg-red-700"><img src={logo} className='w-fit h-full rounded-lg' /></div>
                    <h className="font-poppins font-semibold sm:text-xl">WE HELP ORGANISATIONS</h>
                    <p className="font-poppins sm:text-sm text-center">In Second site we help Organisatins to get employee(s) of their rank/type/choices who can help organisations to
                        meet their vision and mission in competitive ways and strategies</p>
                </div>
            </div>

            <div className="py-6 flex justify-center">
                <div className="flex px-4 flex-col place-items-center">
                    <h className="font-poppins font-bold text-xl">FOR EMPLOYERS AND PRIVATE ORGANISATONS</h>
                    <p className="font-poppins text-justify text-lg font-normal">WE PROVIDE JOB LINK BETWEEN PROFESSIONALS AND PRIVATE ORGANISATIONS WITHIN THE UNITED REPUBLIC OF TANZANIA IN ACCORDANCE</p>
                </div>
            </div>
            <div className="flex m-auto flex-col sm:flex-row sm:space-x-4 justify-center py-6  ">
                <div className="bg-red-500 h-60 w-full sm:w-96"><img src={pic2} className='w-full h-60' /></div>
                <div className="bg-yellow-500 h-60 w-full sm:w-96"><img src={pic4} className='w-full h-60' /></div>
                <div className="bg-blue-400 h-60 w-full sm:w-96"><img src={pic5} className='w-full h-60' /></div>
            </div>

            <div className="flex flex-col my-16 w-full">
                <div className="flex justify-between mx-6 py-4">
                    <h className="font-poppins text-lg flex items-center"><AiFillYoutube className="text-red-700 mx-4 text-xl" />Our youtube videos</h>
                    <p className="font-poppins text-lg  hover:underline">View all videos</p>
                </div>
                <div className='flex flex-col m-auto sm:flex-row justify-center'>
                    {vids.map(vid =>
                        <div key={vid.id} className="flex flex-col space-y-6 relative sm:w-72 w-full h-auto py-4 border-y sm:border-x border-slate-900 mx-2 place-items-center">
                            <div className="w-80 sm:w-60 h-72 sm:h-48 bg-blue-700 rounded-xl"><img src={vid.src} className='h-full w-full rounded-lg' />
                                <AiFillYoutube className='text-red-600 absolute text-xl sm:text-lg sm:bottom-17 sm:left-6' /></div>
                            <h className="font-poppins underline break-normal text-lg sm:text-lg w-80 sm:w-60">{vid.lik}</h>
                        </div>
                    )}
                </div>
            </div>


            <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 justify-center  py-10  ">
                <div className=" sm:border-r px-2 border-rose-800 h-48 space-y-4 w-full sm:w-96 flex flex-col justify-center place-items-center">
                    <div className="h-12 w-12 rounded-lg bg-red-700"> <img src={logo} className='w-fit h-full rounded-lg' /></div>
                    <h className="font-poppins font-semibold text-2xl">JOB ASSISTANCE PORTAL</h>
                    <p className=' font-poppins text-center px-4'>We help OrganisatiOns demands and Employees IN need so that Organisations to get qualified employee(s) in accordance</p>

                </div>
                <div className="sm:border-r px-2 border-blue-800 flex space-y-4 flex-col justify-center place-items-center h-48 w-full sm:w-96">
                    <div className="h-12 w-12 rounded-lg bg-red-700"> <img src={logo} className='w-fit h-full rounded-lg' /></div>
                    <h className="font-poppins font-semibold text-2xl">WE HELP EMPLOYEES</h>
                    <p className='font-poppins text-center'> We help Employees to find a JOBS of his/her desire on time in preferred location under open agreement between.</p>
                </div>
                <div className=" flex flex-col px-2 justify-center space-y-4 place-items-center h-48 w-full sm:w-96">
                    <div className="h-12 w-12 rounded-lg bg-red-700"> <img src={logo} className='w-fit h-full rounded-lg' /></div>
                    <h className="font-poppins font-semibold text-xl"> PRIVATE ORGANISATIONS</h>
                    <p className=' font-poppins text-center'>In Second site we help organisations to employee(s) of their rank/type/choices who can help school to
                        meet their vision and mission in competitive ways and strategie</p>
                </div>
            </div>
        </>
    )
}

export default Home