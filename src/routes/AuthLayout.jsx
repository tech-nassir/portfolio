import { ChakraProvider, Heading } from '@chakra-ui/react';
import * as React from 'react';
import { useRef } from 'react';
import { Outlet, useNavigate } from 'react-router'
import { Box, Flex } from "@chakra-ui/react"


const Navigation = () => {
  return (
    <Flex bg="blue.900" w="100%"  h="3rem" >
      <h1 className="font-semibold text-lg">JobsJunction</h1>
    </Flex>
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