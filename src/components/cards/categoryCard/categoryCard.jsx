import React from 'react'
import './style.css'

function CategoryCard({header}) {
  return (
    <div className='card '>
            <h1 className='carsour'>{header}</h1>
    </div>
  )
}

export default CategoryCard