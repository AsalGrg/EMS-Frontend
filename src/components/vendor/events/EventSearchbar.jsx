import { Input } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import React from 'react'

const EventSearchbar = ({searchedKeyword, setsearchedKeyword}) => {
  return (
    <Input placeholder='Search events' size='md' leftSection={<IconSearch/>}
    value={searchedKeyword}
    onChange={(e)=>setsearchedKeyword(e.target.value)}
    />
  )
}

export default EventSearchbar