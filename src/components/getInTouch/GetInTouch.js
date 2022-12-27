// import React, { useRef } from "react";
// import { services } from "../../helper/services";
// import emailjs from "@emailjs/browser";

// const GetInTouch = ({ modal }) => {
//   const form = useRef();

//   return (
//     <div>
//       <div class={`contact-area pt-80 ${!modal ? "pb-80" : null}`}>
//         <div class="container">
//           <div class="section-title">
//             <h2>Get In Touch With Us</h2>
//             <div class="bar"></div>
//             <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
//           </div>
//           <div class="row align-items-center">
//             {!modal && (
//               <div class="col-lg-6 col-md-12">
//                 <img
//                   src={require("../../assets/images/contact-img.png")}
//                   alt="image"
//                 />
//               </div>
//             )}
//             <div class={`col-lg-${modal ? "12" : 6} col-md-12`}>
//               <form id="contactForm" ref={form} onSubmit={sendEmail}>
//                 <div class="row">
//                   <div class="col-lg-12 col-md-12">
//                     <div class="form-group">
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         class="form-control"
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
//                       />
//                       <div class="invalid-feedback"></div>
//                     </div>
//                   </div>
//                   <div class="col-lg-6 col-md-6">
//                     <div class="form-group">
//                       <input
//                         type="number"
//                         name="number"
//                         placeholder="Your phone number"
//                         class="form-control"
//                       />
//                       <div class="invalid-feedback"></div>
//                     </div>
//                   </div>
//                   <div class="col-lg-6 col-md-6">
//                     <div class="form-group">
//                       <input
//                         type="text"
//                         name="subject"
//                         placeholder="Your Subject"
//                         class="form-control"
//                       />
//                       <div class="invalid-feedback"></div>
//                     </div>
//                   </div>
//                   {!modal && (
//                     <div>
//                       <div class="col-lg-12 col-md-6 ">
//                         <div
//                           style={{
//                             height: 400,
//                             display: "flex",
//                             flexDirection: "column",
//                             flexWrap: "wrap",
//                           }}
//                         >
//                           {services.map((item) => {
//                             return (
//                               <div class="items">
//                                 <div class="checkbox-rect2">
//                                   <input
//                                     type="checkbox"
//                                     id={item.id}
//                                     name="check"
//                                   />
//                                   <label for={item.id}>{item.name}</label>
//                                 </div>
//                               </div>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   )}
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

import React, { useRef, useState } from "react";
import { services } from "../../helper/services";

import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const GetInTouch = ({ modal, modelClose }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  let array = [];
  let limit = 15;

  const handleUpdateIntrestData = (e, index) => {
    const data = array.find((item) => item === e);

    if (data === undefined) {
      array.push(e);
    } else {
      const indexx = array.indexOf(e);
      if (indexx > -1) {
        array.splice(indexx, 1);
      }
    }
  };

  const clearState = () => {
    setEmail("");
    setMessage("");
    setName("");
    setPhone("");
    setSubject("");
    array = [];
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init("bo0d42dcDbZL1U83o");

    if (modal) {
      emailjs
        .send("service_0n1v6bm", "template_88hqabf", {
          from_name: name,
          from_email: email,
          reply_to: email,
          subject: subject,
          message: message,
          phone: phone,
          user_interests: null,
        })
        .then(
          (result) => {
            modelClose(false);
            clearState();
            toast.success("Thank you for Connecting");
          },
          (error) => {
            modelClose(false);
            console.log(error.text);
          }
        );
    } else {
      emailjs
        .send("service_0n1v6bm", "template_88hqabf", {
          from_name: name,
          from_email: email,
          reply_to: email,
          subject: subject,
          message: message,
          phone: phone,
          user_interests: JSON.stringify(array),
        })
        .then(
          (result) => {
            toast.success("Thank you for Connecting");
            clearState();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

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
              <form id="contactForm" ref={form} onSubmit={sendEmail}>
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        required={true}
                        name="name"
                        placeholder="Your Name *"
                        class="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <input
                        type="email"
                        required={true}
                        name="email"
                        placeholder="Your email address *"
                        class="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="number"
                        name="number"
                        required={true}
                        placeholder="Your phone number *"
                        class="form-control"
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value.slice(0, limit))
                        }
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject *"
                        class="form-control"
                        required={true}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  {!modal && (
                    <div>
                      <div class="col-lg-12 col-md-6 ">
                        <h2> Select your Inrest </h2>
                        <div
                        className="row"
                        >
                          {services.map((item, index) => {
                            return (
                              <div class="items col-12 col-lg-6">
                                <div class="checkbox-rect2 ">
                                  <input
                                    type="checkbox"
                                    class="form-control"
                                    id={item.id}
                                    name="check"
                                    onClick={() =>
                                      handleUpdateIntrestData(item.name, index)
                                    }
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
                        required={true}
                        cols="30"
                        rows="5"
                        placeholder="Write your message... *"
                        class="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12">
                    <button type="submit" class="btn btn-secondary">
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
