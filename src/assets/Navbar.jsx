import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { NavbarItems } from './NavbarItems'
import Dropdown from './Dropdown'
function Navbar() {
  const [dropdown,setDropdown]=useState(false)
  return (
    <div>
       
      <nav className='navbar'>
        <Link to="/" className='navbar-logo'>Excellence</Link>
     <ul className='nav-items'>
        {NavbarItems.map((items,index)=>{
          if(items.title==="Services")
          {
            return(
              <li key={index} className={items.cName} onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
    <Link to={items.path} >{items.title}</Link>
    {dropdown && <Dropdown/>}
    </li>
            )
          }
return(
    <li key={index} className={items.cName}>
    <Link to={items.path}>{items.title}</Link>
    </li>
)
        })}
     </ul>
      </nav>
   
    </div>
  )
}

export default Navbar
