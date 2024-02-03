import React from 'react'
import { useParams } from 'react-router'
import SearchResultIntroduction from '../../components/search result/SearchResultIntroduction';

const SearchResult = () => {


    const {eventName, location} = useParams();

  return (
    <main className='px-3'>

      <SearchResultIntroduction/>

      <div className='row'>

          <div className='col-3'>
            For Filters
          </div>
      </div>
    </main>
  )
}

export default SearchResult