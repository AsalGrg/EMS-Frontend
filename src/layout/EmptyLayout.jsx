import React from 'react'
import { Outlet } from 'react-router'

export default function EmptyLayout() {


  return (
    <div className='fonts'
    >
        <Outlet/>
    </div>
  )
}
