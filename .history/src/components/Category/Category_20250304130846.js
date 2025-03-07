import React from 'react'
import {CategoryFullinfos} from "./CategoryFullinfos"
import CategoryCard from './CategoryCard'

function Category() {
  return (
    <section className={classes.catagory_container>
        {
        CategoryFullinfos.map((infos) => {
        <CategoryCard data={infos} /> 
        // console.log(infos);

               })
               }
    </section>
  )
}

export default Category
