import { Text } from '@mantine/core'
import React from 'react'
import AboutUser from './AboutUser'
import UserSocials from './UserSocials'

const AboutTab = () => {
  return (
    <section className='container mt-4 px-5'>
        <div className='row justify-content-between'>

            <AboutUser/>

            <UserSocials/>
        </div>

    </section>
  )
}

export default AboutTab