import React from 'react'

function CategoryCard(data) {
  return (
    <div className=>
      <a href='kaks'>
        <span> {data.title}</span>
        <img src={data.imgLink} alt=''></img>
        <p>{data.name}</p>
      </a>
    </div>
  )
}

export default CategoryCard
