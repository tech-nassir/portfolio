import * as React from 'react';
import { useRef } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router'
import { Box, Flex, HStack, IconButton } from "@chakra-ui/react"
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
import { HiMenuAlt2 } from 'react-icons/hi';


const Menuu = () => {
  const drop = links.map(link =><NavLink to={link.path} className={({ isActive }) =>
      isActive ? "bg-slate-100 outline outline-2  outline-offset-2 outline-slate-50 py-1 text-black rounded-md text-lg font-black" : "py-1" }><p className=" items-center text-sm font-poppins px-2 py-1 font-normal">{link.name}</p></NavLink>);
return (
<DrawerRoot placement="right">
<DrawerBackdrop/>
<DrawerTrigger asChild>
<HiMenuAlt2/>
</DrawerTrigger>
<DrawerContent
 roundedRight={13}
 className="bg-blue-700 text-white">
<DrawerHeader>
<DrawerTitle></DrawerTitle>
</DrawerHeader>
<DrawerBody>
<div className="flex flex-col space-y-2">
  {drop}
</div>
</DrawerBody>
<DrawerFooter>
</DrawerFooter>
<DrawerCloseTrigger />
</DrawerContent>
</DrawerRoot>
);
}

const Down = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <BiChevronDown className="text-gray-700 font-semibold"/>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="setting"><Link to="/settings">Settings</Link></MenuItem>
        <MenuItem value="logout" color="fg.error"><Link to="/">Log out</Link></MenuItem> 
      </MenuContent>
    </MenuRoot>
  )
}

const Navigation = () => {
  return (
    <div className="flex w-full bg-slate-200 px-4 py-2 justify-between items-center mb-2">
      <div className="sm:hidden"><Menuu/></div>
      <h1 className="font-semibold text-lg ml-2 text-slate-900">JobsJunction</h1>
      <div className="flex items-center">
        <FiMail className="text-gray-600 font-bold mx-4"/>
        <Avatar src="pass" colorPalette="blue" name="Nassir Masuke"/>
        <Down/>
        </div>
    </div>
  )
}


const links = [{ path:"home",name:"Home"},{path: "invoices",name:"Invoices"},{path: "forum",name:"Forum"},{path: "resumes",name:"Resumes"},];
const AuthLayout = () => {
    return (
     <div className="w-full h-screen font-poppins">
          <Navigation/>
          <HStack spacing="0px" mx="0px">
          <div className=" min-h-screen hidden w-1/6 rounded-r shadow-lg border-r-2">
             <div className="flex flex-col">
            {links.map(link =>(<NavLink  to={link.path} className={({ isActive }) =>
              isActive ? "bg-blue-600 text-gray-100 rounded-md px-2 py-2" : "text-gray-700 px-2  py-1" }>
                {link.name}
              </NavLink>))
            }
              </div>          
          </div>
          <div className=" mih-h-screen sm:w-4/6 w-full  rounded shadow-xl">
             <Outlet/>
          </div>
          </HStack> 
     </div>
    );
}
export default AuthLayout