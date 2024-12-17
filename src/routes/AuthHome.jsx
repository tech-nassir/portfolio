import React from "react";
import logo from './assets/IMG-20241118-WA0012.jpg'
import { Button, Menu, MenuItem } from "@mui/material";
import { MenuBook } from "@mui/icons-material";
export default function AuthHome () {
    return (
      <div className="flex mx-auto justify-center w-full">
      <h className="font-poppins text-center">AuthHome</h>
        <Menu className="bg-red-700">
          <MenuBook/>
          <MenuItem>moja</MenuItem>
          <MenuItem>mbili</MenuItem>
          <MenuItem>tatu</MenuItem>
        </Menu>
      </div>
    );
}