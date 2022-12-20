import React from "react";

export default function ProjectCard({ data }) {
  return (
    <div className="works-area pt-80 pb-50">
      <div class="container">
        <div class="section-title text-left">
          <h2>
            Our Latest <span>Projects</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {data.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="single-works">
                <img src={item.data.image} alt="image" />
                <a className="icon" href={item.data.projectUrl} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <path
                      d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                      data-name="Right"
                    />
                  </svg>
                </a>
                <div className="works-content">
                  {item.data.content.map((x) => (
                    <>
                      <h3>{item.name}</h3>
                      <p>{x.description}</p>
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div class="our-latest-projects ptb-80">
    // <div class="container">
    //   <div class="section-title text-left">
    //     <h2>
    //       Our Latest <span>Projects</span>
    //     </h2>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //     </p>
    //   </div>
    //     <div class="row">
    //       {data.map((item, index) => {
    //         return (
    //           <div class="col-lg-4 col-sm-6 item">
    //             <div class="single-latest-projects">
    //               <img
    //                 src={item.data.image}
    //                 alt="image"
    //                 style={{
    //                   height: item.imageHeight,
    //                   marginTop: item.marginTop,
    //                 }}
    //               />
    //               <div class="content">
    //                 <span>Development</span>
    //                 <h3>Web Development</h3>
    //               </div>
    //               <a class="link-btn" href="/project-details/"></a>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
}
