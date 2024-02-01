import React from 'react'
import { useParams } from 'react-router'

const SearchResult = () => {


    const {eventName, location} = useParams();

  return (
    <main>

        <div>{eventName} {location}</div>
    </main>
  )
}

export default SearchResult