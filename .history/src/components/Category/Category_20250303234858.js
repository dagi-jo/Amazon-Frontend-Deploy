import React from 'react'
import CategoryFullinfos from "./CategoryFullinfos"
import CategoryCard from './'

function Category() {
  return (
    <section>
        {
        CategoryFullinfos.map((infos) => {
        <CategoryCard data={infos} /> 
               })
               }
    </section>
  )
}

export default Category
