import React from 'react'
import {CategoryFullinfos} from "./CategoryFullinfos"
import CategoryCard from './CategoryCard'

function Category() {
  return (
    <section>
        {
        CategoryFullinfos.map((infos) => {
            console.lo
        <CategoryCard data={infos} /> 
               })
               }
    </section>
  )
}

export default Category
