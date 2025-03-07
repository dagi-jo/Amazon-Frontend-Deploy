import React from 'react'
import {Categoryinfos} from "./CategoryFullinfos"
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'

function Category() {
  return (
    <h1>"This is the Category component."</h1>
    <section className={classes.catagory_container}>
        {
        Categoryinfos.map((infos) => {
        <CategoryCard data={infos} /> 
         console.log(infos);


               })
               }
    </section>
  )
}

export default Category
