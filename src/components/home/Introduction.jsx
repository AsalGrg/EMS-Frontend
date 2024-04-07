import React from 'react'
import './Introduction.css'
import { useTypewriter , Cursor} from 'react-simple-typewriter'
const Introduction = () => {
  const[text] = useTypewriter({
    words: ["Discover Events", "Find Vendors", "Manage Events"],
    loop:{}, 
    deleteSpeed: 30,
    typeSpeed:100,
  })
  
  return (
    <div class="introduction">
        
        <div className="leftIntro">
          <h1 className="title">One platform for all your event needs</h1>
          
          <div className="checkList">
            <div className="checkIcon"><img src="https://www.svgrepo.com/show/508287/check.svg" alt="" /></div>
            <div className="changingTxt"><h1>{text} <Cursor cursorStyle='_'cursorColor='green' cursorBlinking= '100'/></h1></div>
          </div>


        </div>
        <div className="rightIntro">
          <img src="https://web-static.wrike.com/tp/storage/uploads/7a9fcd75-a4f3-49ab-a5db-77b24c136ea1/hero-animation-homepage-600-1.svg" alt="" />
        </div>
    </div>

  )
}

export default Introduction