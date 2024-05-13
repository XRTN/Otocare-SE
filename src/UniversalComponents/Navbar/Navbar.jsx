import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar() {
  const [click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)
  const closeMobileMenu=()=>setClick(false)

 
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
           <img src="/logo.png" alt="Logo" width="15%" height="25%"/>
        </Link>  
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times':'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active':'nav-menu'}>
          <li className='nav-item'>
            <Link to='src/components/RepairShops' className='nav-links'onClick={closeMobileMenu}>
              Repair Shops
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='src/components/Orders' className='nav-links'onClick={closeMobileMenu}>
              Orders
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/profile' className='nav-links'onClick={closeMobileMenu}>
              Profile
            </Link>
          </li>
        </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar;