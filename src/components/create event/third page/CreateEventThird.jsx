import React from 'react'
import { useState } from 'react'
import TicketOptionSelector from './TicketOptionSelector'
import TicketDetailsInput from './TicketDetailsInput'
import { useSelector } from 'react-redux'
import FormButtons from '../formButtons'

const CreateEventThird = () => {

    const formData= useSelector(state=> state.createEvent)


  return (
    <div className='container'>
        <TicketOptionSelector/>

        {formData.ticketType?
        <TicketDetailsInput/>
        :null    
        }

        <FormButtons/>
    </div>
  )
}

export default CreateEventThird