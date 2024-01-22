import React from 'react'
import './CategoryIntroduction.css'
import { introStyles } from './CategoriesStyle'


//other Props such as cat description, cat cover photo to be passed
const CategoryIntroduction = ({catName= "Music" }) => {


    const introStyle= introStyles.filter(style=>{
        if (style.catName=== catName){
            return style
        }
    })

  return (
    <div className='catInfoMain' style={{
        backgroundColor: introStyle[0].backgroundColor,
    }}>
        

        <div className="catNameInfo">
            <h1
            style={{color: introStyle[0].textColor}}>Event Name</h1>

            <p
            style={{color: introStyle[0].descColor}}>Event description</p>
        </div>

        <div className="catCoverPhoto">
            <img src="https://cdn.evbstatic.com/s3-build/fe/build/images/4268533f51b50f55aa2e3927d257f616-nightlife.webp" alt="" />
        </div>
    </div>
  )
}

export default CategoryIntroduction