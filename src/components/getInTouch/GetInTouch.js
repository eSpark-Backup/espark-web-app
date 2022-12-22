import React from "react";
import { services } from "../../helper/services";
import { Link } from "react-router-dom";

const GetInTouch = ({ modal }) => {
  return (
    <div>
      <div class={`contact-area pt-80 ${!modal ? "pb-80" : null}`}>
        <div class="container">
          <div class="section-title">
            <h2>Get In Touch With Us</h2>
            <div class="bar"></div>
            <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
          </div>
          <div class="row align-items-center">
            {!modal && (
              <div class="col-lg-6 col-md-12">
                <img
                  src={require("../../assets/images/contact-img.png")}
                  alt="image"
                />
              </div>
            )}
            <div class={`col-lg-${modal ? "12" : 6} col-md-12`}>
              <form id="contactForm">
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        class="form-control"
                        onChange={(e) => console.log(e)}
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your email address"
                        class="form-control"
                        value=""
                      />
                      <div class="invalid-feedback"></div>
                    </div>  
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Your phone number"
                        class="form-control"
                        value=""
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        class="form-control"
                        value=""
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  {!modal && (
                    <div>
                      <div class="col-lg-12 col-md-6 ">
                        <div
                          style={{
                            height: 400,
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                          }}
                        >
                          {services.map((item) => {
                            return (
                              <div class="items">
                                <div class="checkbox-rect2">
                                  <input
                                    type="checkbox"
                                    id={item.id}
                                    name="check"
                                  />
                                  <label for={item.id}>{item.name}</label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <textarea
                        name="text"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        class="form-control"
                      ></textarea>
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12">
                    <button type="submit" class="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

// import React from "react";
// import "./style.css";
// import { services } from "../../helper/services";
// const GetInTouch = () => {
//   return (
//     <div>
//       <div class="contact-area ptb-80">
//         <div class="container">
//           <div class="section-title">
//             <h2>Get In Touch With Us</h2>
//             <div class="bar"></div>
//             <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
//           </div>
//           <div class="row align-items-center">
//             <div class="col-lg-6 col-md-12">
//               <img
//                 src={require("../../assets/images/contact-img.png")}
//                 alt="image"
//               />
//             </div>
//             <div class="col-lg-6 col-md-12">
//               <form id="contactForm">
//                 <div class="row">
//                   <div class="col-lg-12 col-md-12">
//                     <div class="form-group">
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         class="form-control"
//                         value=""
//                       />
//                       <div class="invalid-feedback"></div>
//                     </div>
//                   </div>
//                   <div class="col-lg-12 col-md-12">
//                     <div class="form-group">
//                       <input
//                         type="text"
//                         name="email"
//                         placeholder="Your email address"
//                         class="form-control"
//                         value=""
//                       />
//                       <div class="invalid-feedback"></div>
//                     </div>
//                   </div>
//                   <div class="col-lg-6 col-md-6">
//                     <div class="form-group">
//                       <input
//                         type="text"
//                         name="number"
//                         placeholder="Your phone number"
//                         class="form-control"
//                         value=""
//                       />
//                       <div class="invalid-feedback"></div>
//                     </div>
//                   </div>

//                   <div class="col-lg-12 col-md-12">
//                     <div class="form-group">
//                       {services.map((item) => {
//                         return (<>
//                           <input
//                             type="checkbox" name={`${item.name}`} value={`${item.name}`}
//                             class="form-control"
//                           >
//                           </input>
//                           <label>{`${item.name}`}</label>
//                         </>
//                         );
//                       })}

//                       <div class="invalid-feedback"></div>
//                     </div>
//                   </div>
//                   <input
//                     type="checkbox"
//                     name="testField"
//                     value=""
//                   />
//                   <div class="col-lg-6 col-md-6">
//                     <div class="form-group">
//                       <input
//                         type="text"
//                         name="subject"
//                         placeholder="Your Subject"
//                         class="form-control"
//                         value=""
//                       />
//                       <div class="invalid-feedback"></div>
//                     </div>
//                   </div>
//                   <div class="col-lg-12 col-md-12">
//                     <div class="form-group">
//                       <textarea
//                         name="text"
//                         cols="30"
//                         rows="5"
//                         placeholder="Write your message..."
//                         class="form-control"
//                       ></textarea>
//                       <div class="invalid-feedback"></div>
//                     </div>
//                   </div>
//                   <div class="col-lg-12 col-sm-12">
//                     <button type="submit" class="btn btn-primary">
//                       Send Message
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetInTouch;
