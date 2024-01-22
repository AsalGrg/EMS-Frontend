import React from 'react'
import SearchBarInput from '../../components/search/SearchBarInput'
import { GiCancel } from "react-icons/gi";
import SearchBarLocation from '../../components/search/SearchBarLocation'
import './SearchBar.css'
import QuickOptions from '../../components/search/QuickOptions'

const SearchBar = () => {
  return (
    <div className='searchBarMainContainer'>

      <div className="cross">
        <GiCancel className='searchBarIcons'/>
      </div>

      <div className="searchBarContents">
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


      <div className="searchBarCollection">
          Collections.
      </div>

      </div>

    </div>
  )
}

export default SearchBar