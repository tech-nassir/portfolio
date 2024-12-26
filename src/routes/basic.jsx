import { useState,useEffect, Children } from "react";
import { Link, NavLink, useNavigate, Outlet } from "react-router";
import logo from './assets/IMG-20241118-WA0012.jpg'
import { FaLock } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { MoodOutlined } from "@mui/icons-material";
import { IoSunnyOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button"
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
import { IconButton } from "@chakra-ui/react";
import { HiMenuAlt2 } from "react-icons/hi";


const Menuu =() => {
    const drop = links.map(link =><NavLink to={link.path} className={({ isActive }) =>
        isActive ? "bg-slate-100 outline outline-1  outline-offset-1 outline-slate-50 py-1 text-black rounded-md text-lg font-black" : "py-1" }><p className=" items-center text-sm font-poppins px-2 py-1 font-normal">{link.name}</p></NavLink>);
  

 return (
 <DrawerRoot placement="top">
 <DrawerBackdrop/>
 <DrawerTrigger asChild>
 <HiMenuAlt2/>
 </DrawerTrigger>
 <DrawerContent
   roundedTop={13}
   className="bg-slate-900 text-white">
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

const links = [{ path:"",name:"Home"},{path: "News",name:"News"},{path: "FAQs",name:"FAQs"},{path: "About Us",name:"About us"}];

function NavBar () {
    const navigate = useNavigate();
    const drop = links.map(link =><NavLink to={link.path} className={({ isActive }) =>
     isActive ? "bg-slate-100 text-black rounded-md text-lg font-black" : "" }><p className=" items-center text-sm font-poppins px-2 py-1 font-normal">{link.name}</p></NavLink>);

return(
        <div className="flex py-2 flex-col sm:flex-row w-full text-xl bg-slate-900 sm:text-lg text-slate-50 sm:h-16  sm:items-center px-4">
         <div className="flex flex-row justify-between py-3 items-center my-auto">
         <div className="flex items-center">
            <Menuu/>
            <h1 className="font-poppins sm:hidden text-slate-50 ml-3 font-bold text-sm  ">JOBS JUNCTION.</h1>
        </div>
        
        <Link to="/login" className="font-poppins text-sm sm:hidden font-semibold">Log in</Link>
        </div>
          <div className="hidden space-x-4 items-center justify-between sm:w-full sm:flex sm:flex-row px-2 "><div className="flex items-center"><img src={logo} className="size-8 rounded-lg"/><h1 className="font-poppins font-bold text-xs sm:text-lg ">JOBS JUNCTION.</h1></div><div className=" flex items-center"><div className="flex space-x-4">{drop}</div><Button bg="blue.200" color="black" className="ml-4" onClick={()=>navigate("login")}>Login</Button></div></div>
        </div>
    );
}


const Basic = () => {
          let navigate = useNavigate();
    return (
        <div className="w-full h-auto overflow-y-auto relative bg-slate-50">
            <NavBar/>
              <Outlet/>
            <div className="bg-slate-900 w-full h-24 bottom-0 pt-2">
                <h1 className="font-poppins ml-4 text-sm text-slate-50 font-semibold">JOBS JUNCTION</h1>
                <img src={logo} className="size-12 rounded-lg absolute right-4"/>
            </div>
        </div>
    );
}
export default Basic