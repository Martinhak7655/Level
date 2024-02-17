import React, { useState } from 'react'
import "./Components1.css"
import { FaTree } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Components1 = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
        <div className='menu'>
            <div className='logo-flex'>
                 <div className='logo'>
                   <FaTree />
                 </div>
                 <h1>Level</h1>
            </div>
            <div className='menu-navbar'>
                <b className="menu-icons1">Home</b>
                <b className="menu-icons">Portfolio</b>
                <b className="menu-icons">Blog Entres</b>
                <b className="menu-icons">Contact Us</b>
            </div>
            <div className='menu-iconsdd' onClick={() => setMenu(!menu)}>
              <IoMenu />
            </div>
            {menu ? (
              <div className='menu-navbar2'>
                <b>Home</b>
                <b>Portfolio</b>
                <b>Blog Entres</b>
                <b>Contact Us</b>
            </div>
            ) : ""}
            
        </div>
    </div>
  )
}

export default Components1