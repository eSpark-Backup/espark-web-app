import React from 'react'

export default function ReadyToTalk({h3,p1,btn,href,getStated}) {
  return (
    <div className="ready-to-talk">
    <div className="container">
        <h3>{h3}</h3>
        <p>{p1}</p><a className="btn btn-primary"
            href="/contact">{btn}</a><span><a href={href}>{getStated}</a></span>
    </div>
</div>  )
}
