import React from 'react'
import './ceo.css'

function CeoSection() {
  return (
    <div className='items' >
      <div className='positionRelative'>
        <div className='positionAbsolute greenBox'> 
        </div>
        <div className='imgWrapper'>
              <img src='https://images.pexels.com/photos/4491476/pexels-photo-4491476.jpeg?auto=compress&cs=tinysrgb&w=1600' className='imgTag'></img>
        </div>
      </div>
      <div className='imgWrapperDisplayNone'>
              <img src='https://images.pexels.com/photos/4491476/pexels-photo-4491476.jpeg?auto=compress&cs=tinysrgb&w=1600' className='imgTag'></img>
      </div>
      <div className='ceoText'>
        <div className='ceoWrapper'>
          <div>
              <h1>Meet our Ceo</h1>
          </div>
          <div>
            <p>It gives me great pleasure to welcome you to the eSpark Consulting Group. As the founder and group CEO, I am incredibly proud and thrilled to have started a company whose mission is to help and train people who are eager to learn and advance in a fast-paced, tech-savvy business. Our organization's motivation is to position eSpark Consulting Group at the top of the IT industry with a bright future.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CeoSection