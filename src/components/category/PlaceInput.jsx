import React, { useState } from 'react'
import './PlaceInput.css'
const PlaceInput = () => {

    const [state, setState] = useState("still")

    const handleInputChange =(e) =>{
        let inputValue = e.target.value

        if(inputValue.length===0){
            setState("empty")
        }
        else{
            setState("typing")
        }
    }
  return (
    <div className='placeInputWrapper'>

        <input type="text" className="placeSearchInput" 
        placeholder='Select location'
        
        onChange={handleInputChange}
        />

        {state=== "typing"?
            <div className="searchLocationShow">
            <p>Searched Location to be shown here </p>
        </div>
        : 
        null
        }
        
    </div>
  )
}

export default PlaceInput