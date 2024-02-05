import { Text } from '@mantine/core';
import React from 'react'
import { useParams } from 'react-router'

const SearchResultIntroduction = () => {

    const {eventName, location}= useParams();
  return (
    <section className='mt-3 mb-5'>
        <h2>{eventName.charAt(0).toUpperCase() + eventName.slice(1)} events in {location}</h2>
    </section>
  )
}

export default SearchResultIntroduction