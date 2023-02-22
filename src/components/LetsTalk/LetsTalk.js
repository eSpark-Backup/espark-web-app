import React, { useRef, useState } from "react";
import { services } from "../../helper/services";
import letsTalkImage from "../../assets/images/letsTalk.svg";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import Button from "../button/button";
import style from "./style.module.css";
import SectionTitle from "../sectionTitle";

const LetsTalk = ({ modal, modelClose, link, h1 }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState(null);

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
    setFiles("");
    array = [];
  };

  const setfileData = (e) => {
    const fileToLoad = e.target.files[0];

    var fileReader = new FileReader();
    var base64;
    // Onload of file read the file content
    fileReader.onload = function (fileLoadedEvent) {
      base64 = fileLoadedEvent.target.result;
      // Print data in console
      setFiles(base64);
    };
    // Convert data to base64
    fileReader.readAsDataURL(fileToLoad);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init("bo0d42dcDbZL1U83o");

    if (link?.includes("vacancies")) {
      emailjs
        .send("service_0n1v6bm", "template_y6yzby6", {
          from_name: name,
          from_email: email,
          reply_to: email,
          message: message,
          phone: phone,
          content: files,
        })
        .then(
          (result) => {
            clearState();
            toast.success("Thank you for Connecting");
          },
          (error) => {
            toast.error("Something Went Wrong");
          }
        );
    } else {
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
              toast.error("Something Went Wrong");
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
              modelClose(false);
              toast.success("Thank you for Connecting");
              clearState();
            },
            (error) => {
              toast.error("Something Went Wrong");
            }
          );
      }
    }
  };

  return (
    <div>
      <div class={`contact-area ${!modal ? "pb-80" : null}`}>
        <div className="container">
          <div class={`${style.letsTalk} row`}>
            <div className="col-lg-8 text-center">
              <SectionTitle
                heading={"Let’s Talk"}
                paragraph={
                  <p>
                    Have any queries, ideas, or feedback for us?
                    <br /> We got you all covered! Just fill out the form below
                    to connect with us.
                  </p>
                }
                width={"100px"}
              />
            </div>
            <div className="col-lg-4 hidden-md hidden-sm">
              <div className={style.letsTalkImage}>
                <img src={letsTalkImage} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className={`${style.formcol} col-lg-8 col-md-12 col-sm-12  text-center`}
            >
              <div className={`${style.formbox} col-lg-12`}>
                <form id="contactForm" ref={form} onSubmit={sendEmail}>
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label className={`${style.label} d-flex`}>Name</label>
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
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <label className={`${style.label} d-flex`}>Email</label>
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
                    {!link?.includes("vacancies") && (
                      <div class="col-lg-12 col-md-12">
                        <div class="form-group">
                          <label className={`${style.label} d-flex`}>
                            Subject
                          </label>
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
                    )}
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label className={`${style.label} d-flex`}>
                          Message
                        </label>
                        <textarea
                          name="text"
                          required={true}
                          cols="30"
                          rows="5"
                          placeholder={"Write your message..."}
                          class="form-control"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <div class="invalid-feedback"></div>
                      </div>
                    </div>
                    <div class="col-lg-12 col-sm-12 d-flex justify-content-center justify-content-sm-start ">
                      <Button
                        type="submit"
                        onClick={sendEmail}
                        title="Send Message"
                        design={1}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 hidden-md hidden-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
