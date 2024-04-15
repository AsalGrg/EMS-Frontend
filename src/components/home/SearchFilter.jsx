import React from 'react'
import './SearchFilter.css'
import { Button } from '@mantine/core'
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

            <Button className="" size='md' color ='#00192F' radius={'md'}>Search Event</Button>
        </div>

    </div>
    </>
  )
}

export default SearchFilter