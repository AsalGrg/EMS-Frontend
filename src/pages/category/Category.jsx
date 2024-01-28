import React, { useState } from 'react'
import CategoryIntroduction from '../../components/category/CategoryIntroduction'
import Navbar from '../../components/navbar/Navbar'
import DatePlaceSelector from '../../components/category/DatePlaceSelector'
import EventSnippetsCategory from '../../components/category/EventSnippetsCategory'
import EventTimeOptions from '../../components/category/EventTimeOptions'
import VendorSnippets from '../../components/global/VendorSnippets'
import { useParams } from 'react-router'

const Category = () => {

  const {id} = useParams();

  return (

    <main>
    <CategoryIntroduction/>

    <DatePlaceSelector />

    <EventSnippetsCategory/>

    <EventSnippetsCategory/>

    <VendorSnippets/>

    <EventSnippetsCategory/>

    <EventTimeOptions categoryTitle= "Category Name"/>
    </main>
  )
}

export default Category