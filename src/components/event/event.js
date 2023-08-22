import React from "react";
import "./style.css";
import Heroarea from "./heroarea";
import Eventcard from './eventcard';
import Recentevent from './recentevent';
import Telentedspeaker from './telentedspeaker';

const Event = () => {
  return (
    <>
      <Heroarea />
      <Eventcard />
      <Recentevent />
      

      

      <div className="achievement-area pt-120 gray-300">
        <div className="achievement-overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 com-sm-6">
                <div className="single-achievement">
                  <div className="achievement-icon">
                    <img src="./speaker.png" alt="" />
                  </div>
                  <h2>
                    <span className="number">54</span> +
                  </h2>
                  <h5>Best Speaker</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 com-sm-6">
                <div className="single-achievement">
                  <div className="achievement-icon">
                    <img src="./calander.png" alt="" />
                  </div>
                  <h2>
                    <span className="number">218</span> +
                  </h2>
                  <h5>Ideal Event</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 com-sm-6">
                <div className="single-achievement">
                  <div className="achievement-icon">
                    <img src="./schedule.png" alt="" />
                  </div>
                  <h2>
                    <span className="number">73</span>+
                  </h2>
                  <h5>New Schedule</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 com-sm-6">
                <div className="single-achievement">
                  <div className="achievement-icon">
                    <img src="./people.png" alt="" />
                  </div>
                  <h2>
                    <span className="number">109</span>+
                  </h2>
                  <h5>Participants</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Telentedspeaker />

    </>
  );
};

export default Event;
