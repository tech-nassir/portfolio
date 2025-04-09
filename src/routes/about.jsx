import React from "react"
import pic2 from './assets/IMG-20241118-WA0013.jpg'
import logo from './assets/20240812_214756.jpg'
import { Facebook, X, YouTube } from "@mui/icons-material";
import { CloseButton } from "../components/ui/close-button";


export default function About () {
    return (
        <div className="w-full  py-12 bg-slate-50 dark:bg-slate-800 ">
          <div className="flex sm:mx-36 pb-12 flex-col sm:flex-row items-center">
            <div className="space-y-3">
                <h1 className="text-5xl sm:text-left text-center font-poppins font-bold">About Us</h1>
                <p className="font-poppins sm:text-md sm:text-left text-center text-blue-800 dark:text-blue-300">Organisations Get the Right Personnel. Professionals Get Hired</p>
            <p className="font-poppins sm:text-left font-normal text-center sm:text-lg">
                Our the main objective to eliminate unemployment
                 scarcity and barriers for Employees and Organisations.
                  On one side we pave ways for Employees to dig up Jobs of their need</p>
            </div>
            <img src={logo} className="sm:w-96 h-96 rounded-lg"/>
          </div>
          <div className=" rounded-lg flex mt-12  sm:flex-row w-96 pb-16 sm:w-full justify-self-center flex-col justify-center space-y-10  mx-12 sm:mx-0">
            <div className="flex flex-col sm:space-y-2 sm:px-16 border-r border-slate-950  place-items-center mt-10">
                <p className="font-poppins font-light sm:text-lg">Jobs connected</p>
                <p className="font-semibold sm:text-3xl font-poppins">2,167</p>
            </div>
            <div className="flex flex-col sm:space-y-2 sm:px-16 border-r border-slate-950 place-items-center">
              <p className="font-poppins font-light sm:text-lg">Established Year</p>
              <p className="font-semibold sm:text-3xl font-poppins">2020</p>
            </div>
            <div className="flex flex-col sm:space-y-2 sm:px-16 place-items-center">
              <p className="font-poppins font-light sm:text-lg">Number of Users </p>
              <p className="font-semibold sm:text-3xl  font-poppins">12,390</p>
            </div>
          </div>

          <p className="font-poppins text-lg font-semibold ml-8">follow us on social media</p>
     <div className="flex sm:flex-row flex-col space-y-4 sm:ml-24 justify-evenly items-center">
        
        <div className="flex items-center">
            <YouTube className="text-red-600 text-xl"/>
        </div>
        <div className="flex items-center">
            <Facebook className="text-blue-600 text-xl"/>
        </div>
        <div className="flex items-center">
            <X className="text-xl"/>
        </div>
     </div>



        </div>
    );
}