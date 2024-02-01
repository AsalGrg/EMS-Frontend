import React from 'react'
import './SearchBarInput.css'
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchEventState } from '../../pages/search result/SearchResultSlice';

const SearchBarInput = () => {

  const dispatch = useDispatch();
  const formData = useSelector(state=> state.searchEvent)

  return (
    <>
    <IoSearch className='searchBarIcons'/>
    <input type="text" className="searchInputSearchBar" 
    placeholder='Search for anything'
    value={formData.searchedEvent}
    onChange={(e)=>{
      dispatch(updateSearchEventState({
        field: "searchedEvent",
        value: e.target.value
      }))
    }}/>
    </>
  )
}

export default SearchBarInput