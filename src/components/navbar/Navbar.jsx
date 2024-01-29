import React from 'react'
import './Navbar.css'

import { BiLogIn } from 'react-icons/bi'
import { GiArchiveRegister } from 'react-icons/gi'
import {FcSearch} from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Navbar = ({theme= "dark"}) => {

  const navStyles= [
    {theme: "dark", backgroundColor: "#00192F", textColor: "#FFFF"},
    {theme: "white", backgroundColor: "#FFFF", textColor: "black"}
  ]

  const navImplStyle= navStyles.filter(style =>{
    if(style.theme=== theme){return style}
  })



  return (
    <nav className="w-100 navbar"
    style={{
      backgroundColor: navImplStyle[0].backgroundColor
    }}
    >

        <div className="navlinks">
            <img src="" alt="logo" className="logo" />

            <Link to='/search'><button className='searchBar'>
              <FcSearch className='searchIcon'/> 
              Search Events</button>
              </Link>
        </div>
        

        <div className="navlinks">
            <li style={{color: navImplStyle[0].textColor}}>Find Events</li>
            <li style={{color: navImplStyle[0].textColor}}>Create Events</li>
            <li><Link to='/login'>
              <button className='signButton'><BiLogIn className="signIcon"/>Login</button> 
            </Link> </li>

            <li><Link to='/register'>
              <button className='signButton'><BiLogIn className="signIcon"/>Register</button> 
            </Link> </li>
        </div>

    </nav>
  )
}

export default Navbar