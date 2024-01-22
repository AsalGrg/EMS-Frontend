import React, { useState } from 'react'
import CategoryIntroduction from '../../components/category/CategoryIntroduction'
import Navbar from '../../components/navbar/Navbar'
import DatePlaceSelector from '../../components/category/DatePlaceSelector'
import EventSnippetsCategory from '../../components/category/EventSnippetsCategory'
import EventTimeOptions from '../../components/category/EventTimeOptions'
import VendorSnippets from '../../components/global/VendorSnippets'

const Category = () => {


  return (
    <div>

    <Navbar theme='white'/>
    <CategoryIntroduction/>

    <DatePlaceSelector />

    <EventSnippetsCategory/>

    <EventSnippetsCategory/>

    <VendorSnippets/>

    <EventSnippetsCategory/>

    <EventTimeOptions categoryTitle= "Category Name"/>
    </div>
  )
}

export default Category