import { Input } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import React from 'react'

const EventSearchbar = () => {
  return (
    <Input placeholder='Search events' size='md' leftSection={<IconSearch/>}/>
  )
}

export default EventSearchbar