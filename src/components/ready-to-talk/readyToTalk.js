import React from 'react'

export default function ReadyToTalk({ h3, p1, btn, href, getStated }) {
  return (
    <div className="ready-to-talk">
      <div className="container">
        <strong style={{ fontSize: "30px", color: "white" }}>{h3}</strong>
        <p>{p1}</p>

      </div>
    </div>
  );
}
