import React from 'react'
import { Link } from 'react-router-dom'

export default function ReadyToTalk({ h3, p1, btn, href, getStated }) {
  return (
    <div className="ready-to-talk">
      <div className="container">
        <h3>{h3}</h3>
        <p>{p1}</p><Link to={href}>
                  <a className="btn btn-primary">{btn}</a><span><a>{getStated}</a></span> 
          </Link>
    </div>
    </div>
  );
}
