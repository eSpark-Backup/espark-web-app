import React from 'react'
import './style.css'

function CategoryCard({ header, image,des }) {
  return (
    <div className="card p-2">
      <div className="row">
        <div className="col-4">
          <img className="card-img-top" src={image} alt="Cardimagecap" />
        </div>
        <div className="col-8">
        <h1 className="carsour">{header}</h1>
        <strong style={{ color:"#11A79c" }}>{des}</strong>
        </div>
      </div>
    </div>
  
  
    
  )
}

export default CategoryCard
