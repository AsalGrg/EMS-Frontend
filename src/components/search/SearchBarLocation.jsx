import React from 'react'
import './SearchBarLocation.css'
import { IoLocationSharp } from "react-icons/io5";

const SearchBarLocation = () => {
  return (
    <>

    <IoLocationSharp className='searchBarIcons'/>
    <input type="text" className="searchBarLocationInput" 
    placeholder='Location'/>
    </>
  )
}

export default SearchBarLocation