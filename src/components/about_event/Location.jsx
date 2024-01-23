import { IconBrandYoutube, IconChevronDown, IconCurrentLocation } from '@tabler/icons-react'
import React from 'react'

const Location = () => {
  return (
    <section className='mb-4'>
        <h4 className="fw-bold mb-3">Location</h4>

        {/* for online */}
        <div className='d-flex'>
            <IconBrandYoutube size={20} className='me-3'/>
            <p>Online</p>
        </div>

        {/* for location */}
        <div className='d-flex'>
            <IconCurrentLocation size={20} className='me-3'/>

            <div>
                <p className='mb-none'>Location Name</p>
                <p className='text-primary'>Show map <IconChevronDown size={16}/></p>
            </div>
        </div>
    </section>
  )
}

export default Location