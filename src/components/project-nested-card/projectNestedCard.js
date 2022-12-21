import React from 'react'
import TeamCard from '../teamCard/teamcard'

export default function ProjectNestedCard({data}) {
  return (
        <>
            <div className="bigdata-analytics-banner banner"  style={{backgroundImage:"url(https://startp-next.envytheme.com/images/bigdata-analytics/main-banner.jpg)"}} >
            <div className="container">
                <div className="bigdata-analytics-content">
                    <h1>{data[0].data.details[0].heading}</h1>
                    <p>{data[0].data.details[0].paragraph}</p><a
                        className="btn btn-primary" href="/contact/">{data[0].data.details[0].btnName}</a>
                </div>  
            </div>
            </div>
            <div class="discover-area ptb-80">
                <div class="container">
                    <div class="row align-items-center">
                        {data[0].data.carousel.map(item => <TeamCard imgUrl={item.img}  h3={item.name} h3_span ={item.h3_span} h3_span2 = {item.h3_span2} p ={item.paragraph} />)}
                    </div>
                </div>
                <div class="analytics-shape1"><img src="https://startp-next.envytheme.com/images/bigdata-analytics/analytics-shape1.png" alt="image"/></div>
            </div>
         </>
  )
}


