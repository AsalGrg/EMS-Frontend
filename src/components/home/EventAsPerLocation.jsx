import React, { useEffect, useState } from 'react'

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

        <input type="text" 
        onChange={setlocation}/>

    </section>
  )
}

export default EventAsPerLocation