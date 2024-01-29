import React, { useState } from 'react'
import './DatePlaceSelector.css'
import PlaceInput from './PlaceInput'
const DatePlaceSelector = () => {
  const [isLocationBtnClicked, setisLocationBtnClicked] = useState(false);
  console.log(isLocationBtnClicked);

  return (
    <div className=''>

      {isLocationBtnClicked &&
    <PlaceInput/>}
    <button className='dateLocationButton'
      onClick={()=> setisLocationBtnClicked((prev)=> !prev)}
      >{isLocationBtnClicked ? "Hide Input": "Select Location"}</button>

        <button className='dateLocationButton'>Date</button>

       
    </div>
  )
}

export default DatePlaceSelector