import { Text } from '@mantine/core'
import React from 'react'
import EachResult from './EachResult'

const SuggestedResults = () => {
  return (
    <div className='mt-3 ps-5 ps-md-0'>
      <Text size='25px' fw={700} className='mb-3'>
        Popular events
      </Text>


      <EachResult/>
    </div>
  )
}

export default SuggestedResults