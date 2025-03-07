import React from 'react'
import classes
function CategoryCard(data) {
  return (
    <div className={FaChampagneGlasses.category}>
      <a href='kaks'>
        <span> {data.title}</span>
        <img src={data.imgLink} alt=''></img>
        <p>{data.name}</p>
      </a>
    </div>
  )
}

export default CategoryCard
