import React from 'react'
import CategoryFullinfos from "./CategoryFullinfos"
import CategoryCard from './CategoryCard'

function Category() {
  return (
    <section>
        CategoryFullinfos.map((infos)=>{
        <CategoryCard data={infos />        })
    </section>
  )
}

export default Category
