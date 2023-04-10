import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import Button from "../button/button";
import  './blogRedesign.css'

function CommentsArea() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setComment] = useState("");
  const [website, setWebsite] = useState("");

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
    setComment("");
    setName("");
    setPhone("");
    setSubject("");
    array = [];
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init("bo0d42dcDbZL1U83o");

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
  };
  return (
    <div className="comments-area">
      <div className="comment-respond ">
        <div className="my-2 ">
          <form className="comment-form  " ref={form} onSubmit={sendEmail}>
            <h3 className="comment-reply-title text-black fw-bold">Lorem implsum</h3>
            <p className="comment-form-comment">
              <label>Comment</label>
              <textarea
                name="comment"
                id="comment"
                cols={45}
                rows={5}
                maxLength={65525}
                required={true}
                // placeholder="Write your message... "
                className={`form-control inputFieldsColor`}
                value={message}
                onChange={(e) => setComment(e.target.value)}
              />
            </p>
            <div className="row  ">
              <div className="col-6 col-md-4 my-3">
                <p className="comment-form-author w-100">
                  <label>
                    Name <span className="required"></span>
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    required={true}
                    // placeholder="Your Name *"
                    className={`form-control inputFieldsColor`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
              </div>
              <div className="col-6 col-md-4 my-3">
                <p className="comment-form-email w-100">
                  <label>
                    Email <span className="required"></span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    required={true}
                    // placeholder="Your email address "
                    className={`form-control inputFieldsColor`}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </p>
              </div>
              <div className="col-6 col-md-4 my-3">
                <p className="comment-form-email w-100">
                  <label>
                    Website <span className="required"></span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={website}
                    required={true}
                    // placeholder="Your Website address *"
                    className={`form-control inputFieldsColor`}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </p>
              </div>
            </div>
            <p className="text-black">
            Lorem ipsum dolor sit amet consectetur. Mauris morbi hendrerit tortor ac massa..
            </p>
            <p className="form-submit my-4">
              <Button
                design={2}
                title={"Submit Comment"}
                type="submit"
                name="submit"
                id="submit"
                className="submit"
                defaultValue="Post Comment"
              />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentsArea;
