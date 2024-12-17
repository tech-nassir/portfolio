import { useState,useEffect } from "react";
import { Link, NavLink, useNavigate, Outlet } from "react-router";
import logo from './assets/IMG-20241118-WA0012.jpg'
import { FaLock } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Button,Box, Typography, Container, IconButton } from '@mui/material';
import { BsSunFill } from "react-icons/bs";
import { MoodOutlined } from "@mui/icons-material";
import { IoSunnyOutline } from "react-icons/io5";

const links = [{ path:"",name:"Home"},{path: "News",name:"News"},{path: "FAQs",name:"FAQs"},{path: "About Us",name:"About us"}];

function NavBar () {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);
    const drop = links.map(link =><NavLink to={link.path} className={({ isActive }) =>
     isActive ? "bg-slate-100 text-black rounded-md text-lg font-black" : "" }><p className=" text-sm font-poppins px-2 py-1 font-normal">{link.name}</p></NavLink>);

return(
        <div className="flex flex-col sm:flex-row w-full text-xl bg-slate-900 sm:text-lg text-slate-50 h-12 sm:h-16  sm:items-center px-4">
         <div className="flex flex-row justify-between pt-2 items-center my-auto">
            <div className="flex items-center">
        <div className="flex sm:hidden" onClick={()=>setMenu(!menu)}><div>{menu ? <MdClose/> : <GiHamburgerMenu/> }</div></div>
        <h1 className="font-poppins sm:hidden text-slate-50 ml-3 font-bold text-xs sm:text-lg ">JOBS JUNCTION.</h1>
        </div>
        <Link to="/login" className="font-poppins text-sm sm:hidden font-semibold">Log in</Link>
        </div>
        <div className=" w-full flex-col sm:flex-row sm:hidden px-1 py-1 flex justify-start ">
        {menu && drop }</div>
          <div className="hidden space-x-4 justify-between sm:w-full sm:flex sm:flex-row px-2 "><div className="flex items-center"><img src={logo} className="size-8 rounded-lg"/><h1 className="font-poppins font-bold text-xs sm:text-lg ">JOBS JUNCTION.</h1></div><div className="flex space-x-4">{drop}<Button variant="outlined" size="small" className="ml-4" onClick={()=>navigate("login")}>Login</Button></div></div>
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