import React, { useEffect, useState } from 'react'
import Introduction from '../../components/home/Introduction'
import SearchFilter from '../../components/home/SearchFilter'
import EventSnippets from '../../components/global/EventSnippets'
import VendorSnippets from '../../components/global/VendorSnippets'
import Categories from '../../components/home/category/Categories'

const Home = () => {

    const [trendingEvents, settrendingEvents] = useState([])

    const [upcomingEvents, setupcomingEvents] = useState([])

    const [eventsPerChoice, seteventsPerChoice] = useState([])

  return (
    <div className='container px-5'>
        <Introduction/>
        <SearchFilter/>

        {trendingEvents.length ?(
            <EventSnippets events= {trendingEvents} title= "Trending Events"/>
        ):(null)}

        <Categories/>

        <EventSnippets events={upcomingEvents} title= "Upcoming events"/>
        
        <VendorSnippets/>

        <EventSnippets events={eventsPerChoice} title="Based on your choice"/>
    </div>
  )
}

export default Home