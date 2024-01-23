import { IconHourglassHigh } from '@tabler/icons-react'
import React from 'react'

const AboutEventSection = () => {
  return (
    <section className='mb-5'>

        <h4 className='fw-bold mb-3'>About Event</h4>

        {/* event duration icons */}
        <div className='d-flex'>
            <div className='d-flex me-5'>
                <IconHourglassHigh size={20} className='me-3'/>
                <p>2hr 24mins</p>
            </div>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas eveniet, laudantium, reiciendis excepturi totam accusamus laboriosam dolore iste alias natus nam rerum labore, debitis porro suscipit dolores corporis dolorem inventore itaque consectetur aut. Quia voluptates repudiandae aperiam? Ipsam, velit?</p>

    </section>
  )
}

export default AboutEventSection