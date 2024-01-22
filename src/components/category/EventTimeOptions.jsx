import React from 'react'

import './EventTimeOptions.css'
import MyCoursel from '../utilities/MyCoursel'
const EventTimeOptions = ({categoryTitle}) => {
  return (

    <div className="eventTimeOptionsDiv">

        <h1 className="highlights">{categoryTitle} Event Time</h1>
        <div className="universalCourselView">

            <MyCoursel backgroundColor='#f8f7fa'>

                <div className="eventTimeOptionsView">
                    Today
                </div>

                <div className="eventTimeOptionsView">
                    Tommorow
                </div>

                <div className="eventTimeOptionsView">
                    This weekend
                </div>

                <div className="eventTimeOptionsView">
                    This week
                </div>

                <div className="eventTimeOptionsView">
                    Next week
                </div>

                <div className="eventTimeOptionsView">
                    This month
                </div>

                <div className="eventTimeOptionsView">
                    Next month
                </div>
            </MyCoursel>
        </div>
        
    </div>
    )
}

export default EventTimeOptions