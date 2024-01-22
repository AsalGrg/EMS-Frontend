import React from 'react'
import { useSelector } from 'react-redux'

const AboutText = () => {


  const formData= useSelector(state=> state.createEvent);
  return (
    <>
        {
            !formData.isAboutClicked?
            formData.aboutEvent? <div dangerouslySetInnerHTML={{__html:formData.aboutEvent}}></div>
            :<p className='d-none d-md-block'>Use this section to provide more details about your event.You can include things to know, venue information, parking, accessbility options—anything that will help people know what to expect</p>
            :<p>Add more details about your event and include what people can expect if they attend.</p>
        }

    </>
  )
}

export default AboutText