import { ChakraProvider, Heading } from '@chakra-ui/react';
import * as React from 'react';
import { useRef } from 'react';
import { Outlet, useNavigate } from 'react-router'
import { Box, Flex } from "@chakra-ui/react"


const Navigation = () => {
  return (
    <div className="flexw-full py-3 bg-slate-800 items-center">
      <h1 className="font-semibold text-lg text-white">JobsJunction</h1>
    </div>
  )
}

const AuthLayout = () => {
    return (
     <div className="w-full h-screen font-poppins">
          <Navigation/>
           <Outlet/>
       
     </div>
    )
}
export default AuthLayout