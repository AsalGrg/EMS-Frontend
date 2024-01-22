import React from 'react'
import './Categories.css'
const Categories = () => {
  return (
    <div className="categorySnippet" 
    style={{
        backgroundImage : `url("https://eventmie-pro.classiebit.com/frontend-assets?path=img%2Fbg-pattern.png")`
    }}>
    
        <h1 className="highlights" style= {{color : 'white'}}>Event Categories</h1>

        <div className="categoryView">

            <div className="category">

              <div className="categoryIcon"
              style={{
              backgroundImage:`url("https://res.cloudinary.com/dx6kf6pen/image/upload/v1699534947/Category%20Icons/microphone-alt_bjv6xy.png")`
              }}></div>

              <p className="catName">Event Name</p>

            </div>


            <div className="category">

              <div className="categoryIcon"
              style={{
              backgroundImage:`url("https://res.cloudinary.com/dx6kf6pen/image/upload/v1699534947/Category%20Icons/microphone-alt_bjv6xy.png")`
              }}></div>

              <p className="catName">Event Name</p>

            </div>

            <div className="category">

              <div className="categoryIcon"
              style={{
              backgroundImage:`url("https://res.cloudinary.com/dx6kf6pen/image/upload/v1699534947/Category%20Icons/microphone-alt_bjv6xy.png")`
              }}></div>

              <p className="catName">Event Name</p>

            </div>

            
        </div>
          
        {/* <div className="exploreButtonDiv">
            <button className="universalButton snippetButton">See More</button>
        </div> */}
    
    </div>
  )
}

export default Categories