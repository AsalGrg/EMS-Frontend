import React from 'react'
import './SearchFilter.css'
const SearchFilter = () => {
  return (
    <>
    <div className="searchDiv">

        <div className="searchFilter">
            
            <select name="" id="">
                <option value="">Select Location</option>
            </select>

            <select name="" id="">
                <option value="">Select Date</option>
            </select>

            <select name="" id="">
                <option value="">Select Category</option>
            </select>

            <button className="universalButton">Search Event</button>
        </div>

    </div>
    </>
  )
}

export default SearchFilter