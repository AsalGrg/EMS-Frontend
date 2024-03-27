import { Text, Title } from '@mantine/core'
import React from 'react'

const NoEventsBanner = () => {
  return (
    <section
    className='mt-4 rounded d-flex justify-content-center align-items-center'
    style={{
        height: '250px',
    }}
    >

     <div className='d-flex flex-column text-center align-items-center gap-2'>
        <img src='/no-search-result.png'
        className='w-50'
        ></img>

        <Title order={3}>We couldn't find anything</Title>
        <Title order={5} c={'dimmed'}>Adjust your filters and try again</Title>
    </div>   
    </section>
  )
}

export default NoEventsBanner