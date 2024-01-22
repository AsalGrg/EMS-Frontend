import React, { useEffect, useState } from 'react'

import './Snippet.css'

const EventSnippets = ({events, title}) => {

    return (

    <div className="eventSnippets">
        <h1 className="highlights">{title}</h1>

{/* actual implementation */}
        {/* <div className="gridView">

            {events.map((event)=>(
            
            <div className="gridContent">

            <div className="event_image"
            style={{
                backgroundImage : `url(${event.eventCoverImage})`
            }}>
            </div>

            <div className="eventDesc">
                
                <p className="eventTitle">{event.name}</p>

                <div className="eventDates">
                    <p>{event.date} 7:45 AM</p>
                </div>

                <div class="subDesc">
                    <p className="venue">Place, Venue</p>
                    <p className="price">Free</p>
                    <p className="vendor">Vendor Name</p>
                    <p className="vendor">Vendor Followers</p>
                </div>

            </div>
            
        </div>
        
            ))}
        </div> */}

        {/* hardcore values */}

        <div className="gridView">
            
        <div className="gridContent">

<div className="mainContent">
    <div className="event_image"
    style={{
        backgroundImage : `url("https://th.bing.com/th/id/R.6df5c647fda413995e816bb708652c38?rik=XLwMXtsK%2bAnk%2bQ&pid=ImgRaw&r=0")`
    }}
>
</div>

<div className="eventDesc">
    
    <p className="eventTitle">Event Name</p>

    <div class="subDesc">
        <p className="eventDates">eventDates</p>
        <p className="venue">Place, Venue</p>
        <p className="price">Free</p>
        <p className="vendor">Vendor Name</p>
        <p className="vendor">Vendor Followers</p>
    </div>

    </div>

    </div>
    <div className="eventCat">
        <p className="categoryNameInGrid">Category Name</p>
    </div>

</div>


             
            <div className="gridContent">

            <div className="mainContent">
                <div className="event_image"
                style={{
                    backgroundImage : `url("https://th.bing.com/th/id/R.6df5c647fda413995e816bb708652c38?rik=XLwMXtsK%2bAnk%2bQ&pid=ImgRaw&r=0")`
                }}
            >
            </div>

            <div className="eventDesc">
                
                <p className="eventTitle">Event Name</p>

                <div class="subDesc">
                    <p className="eventDates">eventDates</p>
                    <p className="venue">Place, Venue</p>
                    <p className="price">Free</p>
                    <p className="vendor">Vendor Name</p>
                    <p className="vendor">Vendor Followers</p>
                </div>

                </div>

                </div>
                <div className="eventCat">
                    <p className="categoryNameInGrid">Category Name</p>
                </div>
            
            </div>

             
           




        </div> 
        
        


        {/* hardcore values ends here */}

        <div class="exploreButtonDiv">
            <button class="universalButton snippetButton">See More</button>
        </div>
        
    </div>
  )
}

export default EventSnippets