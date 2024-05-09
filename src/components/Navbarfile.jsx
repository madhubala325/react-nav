import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarItems } from '../assets/NavbarItems'
function Navbarfile() {
  return (
    <div>
      <nav>
        <Link>Excellence</Link>
        <ul>
            {NavbarItems.map((items)=>{
                return(
                    <li key={items.id} className={items.cName}><Link to={items.path}>{items.title}</Link></li>
                )
            })}
        </ul>
      </nav>
    </div>
  )
}

export default Navbarfile
