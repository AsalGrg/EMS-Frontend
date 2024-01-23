import React, { useEffect, useState } from 'react'
import Introduction from '../../components/home/Introduction'
import SearchFilter from '../../components/home/SearchFilter'
import Categories from '../../components/home/Categories'
import EventSnippets from '../../components/global/EventSnippets'
import VendorSnippets from '../../components/global/VendorSnippets'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {

    const [trendingEvents, settrendingEvents] = useState([])

    const [upcomingEvents, setupcomingEvents] = useState([])

    const [eventsPerChoice, seteventsPerChoice] = useState([])

  return (
    <>
        <Navbar/>
        <Introduction/>
        <SearchFilter/>

        {trendingEvents.length ?(
            <EventSnippets events= {trendingEvents} title= "Trending Events"/>
        ):(null)}

        <Categories/>

        <EventSnippets events={upcomingEvents} title= "Upcoming events"/>
        
        <VendorSnippets/>

        <EventSnippets events={eventsPerChoice} title="Based on your choice"/>
    </>
  )
}

export default Home