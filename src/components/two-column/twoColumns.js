import React from 'react'

export default function TwoColumns({imgUrl,imgAlt,heading2,paragraph1,paragraph2,paragraph3,paragraph4}) {
  return (
    <div className="about-area ptb-80">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
                <div className="about-image"><img src={imgUrl} alt={imgAlt}/></div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="about-content">
                    <div className="section-title">
                        <h2>{heading2}</h2>
                        <div className="bar"></div>
                        <p>{paragraph1}</p>
                    </div>
                    <p>{paragraph2}</p>
                    <p>{paragraph3}</p>
                    <p>{paragraph4}</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
