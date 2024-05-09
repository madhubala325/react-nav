import React, { useState } from 'react'
import './Navbar.css'
import { ServiceDropdown } from './NavbarItems'
import { Link } from 'react-router-dom'
function Dropdown() {
    const [dropdown,setDropdown]=useState(false)
  return (
    <>
      <ul className={dropdown ? "services-submenu clicked":"services-submenu"} onClick={()=>setDropdown(!dropdown)}>
        {ServiceDropdown.map((item,index)=>{                           
            return (
                <li key={index}>
                    <Link to={item.path} className={item.cName} onClick={()=>setDropdown(false)}>{item.title}</Link>
                </li>
            )
        })}
      </ul>
    </>
  )
}

export default Dropdown
