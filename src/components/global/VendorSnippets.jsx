import React from 'react'
import './VendorSnippets.css'
import MyCoursel from '../utilities/MyCoursel'
const VendorSnippets = () => {


  return (
    
    <div className="vendorSnippets">

        <h1 className="highlights">Vendors To Follow</h1>

        <div className="universalCourselView">
            
        <MyCoursel>
            <div className="vendorViewEach">

              <div className="vendorIntro">
                <img src="" alt="Profile Pic of Vendor" className="vendorProfilePicSnippet"/>

                <p>Vendor Name</p>

                <p>1000 Followers</p>

              </div>

              <div className="vendorFollowers">

                <button className='signButton'>Follow</button>
              </div>

            </div>
            <div className="vendorViewEach"></div>
            <div className="vendorViewEach"></div>
            <div className="vendorViewEach"></div>
            <div className="vendorViewEach"></div>
            <div className="vendorViewEach"></div>
            <div className="vendorViewEach"></div>
            <div className="vendorViewEach"></div>
            <div className="vendorViewEach"></div>
        </MyCoursel>


        </div>
    </div>
  )
}

export default VendorSnippets