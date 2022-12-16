import React from 'react'

export default function ThreeColumn({data}) {
  return (
    <div className="about-area ptb-80">
    <div className="container">
    <div className="about-inner-area">
    <div className="row justify-content-center">
        {data.map(item =>   <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="about-text">
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
            </div>
        </div>)}
    </div>
</div>
    </div>
</div>
  )
}
