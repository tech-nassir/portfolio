import { useState } from "react";
import { Link, NavLink, useNavigate, Outlet } from "react-router";
import logo from './assets/IMG-20241118-WA0012.jpg'
import { FaLock } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Button,Box, Typography, Container } from '@mui/material';

const links = [{path:"",name:"Home"},{path: "News",name:"News"},{path: "FAQs",name:"FAQs"},{path: "About Us",name:"About Us"}];

function NavBar () {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);
    const drop = links.map(link =><NavLink to={link.path} className={({isActive})=>{isActive ? "underline decoration-gray-100 font-semibold" : "font-light"}}><p className="font-poppins px-1 py-1 text-sm font-light">{link.name}</p></NavLink>);
    return(
        <div className="flex w-full bg-slate-900 text-gray-100 py-2 px-4">
        <div className="sm:hidden" onClick={()=>setMenu(!menu)}>{menu ? <MdClose/> : <GiHamburgerMenu/> }</div>
        <div className=" w-full flex-col sm:flex-row sm:hidden  px-3 py-3 flex justify-start ">
        {menu && drop }</div>
          <div className="hidden space-x-4 justify-start sm:w-full sm:flex sm:flex-row px-2 py-1">{drop}</div>
        </div>
    )
}

const Basic = () => {
    let navigate = useNavigate();


    return(
        <div className="w-full h-dvh overflow-y-auto relative bg-slate-50">
            <div className="flex items-center justify-between p-4">

                <div className="flex items-center">
                    <img src={logo} className="sm:h-12 h-8 w-8 sm:w-12 rounded-lg"/>
                    <div className="flex ml-4 flex-col">
                    <h1 className="font-poppins font-semibold text-xs sm:text-sm ">JOBS JUNCTION</h1>
                    <p className=" font-semilight text-xs font-poppins text-slate-700">Right place for jobs</p>
                    </div>
                </div>
                <Button variant="outlined" size="small"color="deepBlue[600]" onClick={()=>navigate("login")} className="font-poppins rounded-lg py-1 px-2 border bg-slate-100 border-slate-800 hover:bg-slate-800 hover:border-none flex items-center
                 hover:text-gray-100 hover:font-normal">Login<FaLock className='ml-2'/>
                 </Button>
            </div>
            <NavBar/>
              <Outlet/>
            <div className="bg-slate-900 w-full h-24 bottom-0 pt-2">
                <img src={logo} className="size-12 rounded-lg absolute right-4"/>
            </div>
        </div>
    );
}
export default Basic