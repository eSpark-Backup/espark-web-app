import React from 'react'

export default function ProjectNestedCard({data}) {
  return (<React.Fragment>
          <div className='row'>
            {data.map((item, index) => <div key={index} class="col-lg-4 col-md-6">
                         <div class="single-works">
                            <img src={item.imgUrl} alt="image" width={"100%"}/>
                         </div>
            </div>)}
            </div>

            </React.Fragment>
  )
}


