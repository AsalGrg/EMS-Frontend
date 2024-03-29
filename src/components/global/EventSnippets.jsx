import React, { useEffect, useState } from 'react'

import './Snippet.css'
import EventSnippetsCourselView from './EventSnippetsCourselView'
import EventSnippetsGridView from '../home/EventSnippetsGridView'

const EventSnippets = ({events, title}) => {

    return (

    <section className='mt-5'>


        {/* grid view
        <div className='d-none d-lg-block'>
           <EventSnippetsGridView/>
        </div>


        {/* coursel view */}

        {/* <div className='d-block d-lg-none'>
            <EventSnippetsCourselView/>
        </div> */}
    </section>
  )
}

export default EventSnippets