import React, { useEffect, useState } from 'react'
import PlaceSelector from '../utilities/placeSelector';

const EventAsPerLocation = () => {

    const [location, setlocation] = useState();

    useEffect(() => {
      console.log("first")
    }, [])

    useEffect(() => {

        console.log("second")
      
    }, [location])
    
  return (
    <section>

        <PlaceSelector/>

    </section>
  )
}

export default EventAsPerLocation