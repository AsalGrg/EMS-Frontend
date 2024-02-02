import React from 'react'
import SearchBarInput from '../../components/search/SearchBarInput'
import { GiCancel } from "react-icons/gi";
import SearchBarLocation from '../../components/search/SearchBarLocation'
import './SearchBar.css'
import QuickOptions from '../../components/search/QuickOptions'
import EventCollection from '../../components/global/event collections/EventCollection'

const SearchBar = () => {
  return (
    <div className='row px-5 py-3'>

      <div className="col-12 d-flex justify-content-end mb-5">
        <GiCancel className='searchBarIcons'/>
      </div>

      <div className="col-6">
      <div className="searchBarInputs">
        <div className="eachInput">
          <SearchBarInput/>
        </div>


        <div className="eachInput">
          <SearchBarLocation/>
        </div>


        <div className="eachInput">
          <QuickOptions/>
        </div>

      </div>

      </div>

      <div className="col-6">
          <EventCollection/>
      </div>
    </div>
  )
}

export default SearchBar