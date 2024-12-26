import * as React from 'react';
import { useRef } from 'react';
import { Outlet, useNavigate } from 'react-router'
import { Box, Flex, IconButton } from "@chakra-ui/react"
import {Avatar } from "@/components/ui/avatar"
import pass from  './assets/20240812_214756.jpg'
import { FiMail } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger
} from "@/components/ui/menu"


const Down = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <BiChevronDown className="text-gray-700 font-semibold"/>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="setting">Setting</MenuItem>
        <MenuItem value="logout" color="fg.error">Log out</MenuItem> 
      </MenuContent>
    </MenuRoot>
  )
}

const Navigation = () => {
  return (
    <div className="flex w-full px-2 py-2 bg-gray-50 justify-between items-center">
      <h1 className="font-semibold text-lg ml-2 text-gray-800">JobsJunction</h1>
      <div className="flex items-center">
        <FiMail className="text-gray-600 font-bold mx-4"/>
        <Avatar src="pass" colorPalette="blue" name="Nassir Masuke"/>
        <Down/>
        </div>
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