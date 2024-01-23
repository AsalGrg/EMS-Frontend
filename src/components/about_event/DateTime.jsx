import { IconCalendarClock } from '@tabler/icons-react'
import React from 'react'

const DateTime = () => {
  return (
    <section className='mb-4'>
        <h4 className='fw-bold mb-3'>Date and Time</h4>

        <div className='d-flex'>
        <IconCalendarClock size={20} className='me-3'/>
        <p className=''>Jan 1 . 12:30pm - Jan 3 . 1:00pm</p>
        </div>
    </section>
  )
}

export default DateTime