import React from "react"
import { Button,Box, Accordion,AccordionActions, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMoreRounded } from "@mui/icons-material";

function Acc ({cordion}) {
    return (
      <Accordion sx={{borderRadius: "1rem", shadow: "none",backgroundColor: 'slate' }} className="dark:bg-slate-900 text-gray-50">
        <AccordionSummary 
                expandIcon={<ExpandMoreRounded  className="bg-slate-800 text-gray-100 rounded-full p-1 m-1"/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className="font-poppins text-md dark:text-gray-100 font-semilight sm:text-md">
                    {cordion.name}
                </AccordionSummary>
                <AccordionDetails
                className="font-poppins text-gray-800 dark:text-gray-100 sm:text-sm text-sm"
                >{cordion.detail}</AccordionDetails>

        </Accordion>
    );
}




export default function Faqs () {
    return (
        <div className="bg-slate-50 dark:bg-slate-800">
        <h1 className="text-center text-2xl font-poppins py-2 font-bold">Frequently Asked Questions</h1>
            <p className="text-center font-poppins py-6 sm:text-md">We tried to answer most common questions, if you have any additional, please get in touch with our friendly team</p>
        <div className="flex flex-col space-y-2 sm:mx-60 mx-8 mt-6 mb-36">
        <Acc cordion={{
            name: "What is job junction?",
            detail: "Jobs’ Junction is a software platform provided by jobs junction organisation with the main objective to eliminate unemployment for Teachers and Schools. On one side we pave ways for professionals to dig up jobs of their need. On the second side is to help organisations or employers to have employees with their rank who can help them to achieve their mission and visions with the competitive knowledge and strategies. Jobs Junction is now here with Jobs’ Networking Centre to solve these problems between employers demands and employees needs so that Organisations to get qualified employee(s) in accordance"
        }} />
        <Acc cordion={{
            name: "what is job junction's mission",
            detail: "Our the main objective to eliminate unemployment for Employees and Organisations. On one side we pave ways for Employees to dig up Job Vacancies of their Need"
        }}/>
        <Acc cordion={{
            name: "Does jobs junction worth trust?",
            detail: "Our the main objective to eliminate unemployment for Employees and Organisations. On one side we pave ways for Employees to dig up Job Vacancies of their Need"
        }}/>
        </div>
        
  <div className="rounded-xl sm:m-6 mx-6 px-6 bg-slate-200 dark:bg-slate-900 sm:w-96 py-6 justify-self-center place-items-center space-y-4">
        <h1 className="font-bold font-poppins text-lg">Still have questions?</h1>
        <p className="sm:text-sm text-center font-poppins">We're sorry we couldn't provide you with the information you were looking for, please contact us and we'll be happy to help</p>
        <button className="py-2 px-4 bg-slate-800 text-gray-200 rounded-lg text-sm font-poppins mt-3 sm:text-xs">Contact us</button>
    </div>
        
        
        </div>
    );
}