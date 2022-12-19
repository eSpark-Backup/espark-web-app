import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ data }) {

  return (
    <div className="works-area pt-80 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          {data.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="single-works ">
                <img src={item.data.image} alt="image" />
                <a className="icon" href="/project-details/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </a>
                <div className="works-content">

                      {/* {item.map(item => {
                          return { item.data.content.map(nestedItem => <h1>hellp</h1>)}
                          }
                    }  */}

                    {item.data.content.map(x =><><h3> 
                         <Link
                          class="read-more-btn"
                              to={`/project-detail/${item.name }`}

                              
                            >
                             <a href="/project_details/">
                                {x.heading}
                            </a>
                            </Link> </h3><p>{x.description}</p></>)}
                 
              
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
