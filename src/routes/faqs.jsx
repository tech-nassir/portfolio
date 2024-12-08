import React from "react"
import { Button,Box, Accordion,AccordionActions, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMoreRounded } from "@mui/icons-material";

function Acc () {
    return (
        <Accordion sx={{borderRadius: "0.1rem", shadow: "none",backgroundColor: 'slate' }}>
            <AccordionSummary 
                expandIcon={<ExpandMoreRounded  className="bg-slate-800 text-gray-100 rounded-full p-1 m-1"/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className="font-poppins text-md font-semilight sm:text-sm"
                >
                    What is job junction ?
                </AccordionSummary>
                <AccordionDetails
                className="font-poppins text-gray-800 sm:text-xs text-sm"
                >
                Jobs’ Junction is a software platform provided by jobs junction organisation with the main objective to eliminate unemployment for Teachers and Schools. On one side we pave ways for professionals to dig up jobs of their need. On the second side is to help organisations or employers to have employees with their rank who can help them to achieve their mission and visions with the competitive knowledge and strategies. Jobs Junction is now here with Jobs’ Networking Centre to solve these problems between employers demands and employees needs so that Organisations to get qualified employee(s) in accordance
                </AccordionDetails>

        </Accordion>
    );
}




export default function Faqs () {
    return (
        <div className="w-full h-dvh py-6 overflow-y-auto bg-slate-50">
        <h1 className="text-center text-xl font-poppins py-2 font-bold">Frequently Asked Questions</h1>
            <p className="text-center font-poppins py-6 sm:text-sm">We tried to answer most common quesions, if you have any additional, please get in touch with our friendly team</p>
        <div className="flex flex-col space-y-2 sm:mx-60 mx-8 mt-6 mb-36">
        <Acc/>
        <Acc/>
        <Acc/>
        </div>
        
    <div className="rounded-xl sm:m-6 mx-6 px-6 bg-slate-200 sm:w-96 py-6 justify-self-center place-items-center space-y-4">
        <h1 className="font-bold font-poppins text-lg sm:text-sm">Still have questions?</h1>
        <p className="sm:text-xs text-center font-poppins">We're sorry we couldn't provide you with the information you were looking for, please contac us and we'll be happy to help</p>
        <button className="py-2 px-4 bg-slate-800 text-gray-200 rounded-lg text-sm font-poppins mt-3 sm:text-xs">Contact us</button>
    </div>
        
        
        </div>
    );
}