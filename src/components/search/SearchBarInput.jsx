import React from 'react'
import './SearchBarInput.css'
import { IoSearch } from "react-icons/io5";

const SearchBarInput = () => {
  return (
    <>
    <IoSearch className='searchBarIcons'/>
    <input type="text" className="searchInputSearchBar" 
    placeholder='Search for anything'/>
    </>
  )
}

export default SearchBarInput