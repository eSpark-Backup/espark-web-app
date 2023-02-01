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
      

      

      <div class="achievement-area pt-120 gray-300">
        <div class="achievement-overlay">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 com-sm-6">
                <div class="single-achievement">
                  <div class="achievement-icon">
                    <img src="./speaker.png" alt="" />
                  </div>
                  <h2>
                    <span class="number">54</span> +
                  </h2>
                  <h5>Best Speaker</h5>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 com-sm-6">
                <div class="single-achievement">
                  <div class="achievement-icon">
                    <img src="./calander.png" alt="" />
                  </div>
                  <h2>
                    <span class="number">218</span> +
                  </h2>
                  <h5>Ideal Event</h5>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 com-sm-6">
                <div class="single-achievement">
                  <div class="achievement-icon">
                    <img src="./schedule.png" alt="" />
                  </div>
                  <h2>
                    <span class="number">73</span>+
                  </h2>
                  <h5>New Schedule</h5>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 com-sm-6">
                <div class="single-achievement">
                  <div class="achievement-icon">
                    <img src="./people.png" alt="" />
                  </div>
                  <h2>
                    <span class="number">109</span>+
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
