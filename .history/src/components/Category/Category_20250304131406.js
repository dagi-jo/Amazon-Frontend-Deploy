import React from 'react'
import {CategoryFullinfos} from "./CategoryFullinfos"
import CategoryCard from './CategoryCard'
import classes from

function Category() {
  return (
    <section className={classes.catagory_container}>
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
