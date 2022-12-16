import React from 'react'
import TeamCard from '../teamCard/teamcard'
import Team_1 from '../../assets/images/team-image/team1.jpg'

export default function TeamCarousel({heading2,paragraph1,data}) {
  return (
    <div className="team-area ptb-80 bg-f9f6f6">
    <div className="container">
        <div className="section-title">
            <h2>{heading2}</h2>
            <div className="bar"></div>
            <p>{paragraph1}</p>
        </div>
        <TeamCard imgUrl={Team_1} h3 ="Josh Butler" h3_span ="Marketing" h3_span2 ="Manager" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      </div>
</div>
  )
}
