import React from 'react'
import EachEvent from './EachEvent'

const Events = () => {
  return (
    <section className='mt-4 w-100'>

        <table
        className='eventTable'
        style={{
            width: "100%"
        }}
        >
            <tr className='eventTable-headers'>
                <th className='w-50'>Event</th>
                <th className='w-25'>Sold</th>
                <th>Gross</th>
                <th className='d-none d-xl-table-cell'>Status</th>
                <th></th>
            </tr>

            <EachEvent/>

            <EachEvent/>

            <EachEvent/>

            <EachEvent/>
        </table>
    </section>
  )
}

export default Events