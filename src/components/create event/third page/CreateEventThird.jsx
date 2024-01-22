import React from 'react'
import { useState } from 'react'
import TicketOptionSelector from './TicketOptionSelector'
import TicketDetailsInput from './TicketDetailsInput'
import { useSelector } from 'react-redux'

const CreateEventThird = () => {

    const formData= useSelector(state=> state.createEvent)


  return (
    <div className='container'>
        <TicketOptionSelector/>

        {formData.ticketType?
        <TicketDetailsInput/>
        :null    
        }
    </div>
  )
}

export default CreateEventThird