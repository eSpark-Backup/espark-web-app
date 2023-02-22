import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

// import Moment from "react-moment";
// import { getApiCall, getCategoriesApiCall, getTagsApiCall } from './../../utils/Blogs';
// import { Link } from "react-router-dom";
function CommentsArea() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setComment] = useState("");

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

        emailjs.send("service_0n1v6bm", "template_88hqabf", {
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
    return (
        <div className="comments-area">
            <div className="comment-respond">
                <h3 className="comment-reply-title">Leave a Reply</h3>
                <form className="comment-form" ref={form} onSubmit={sendEmail}>
                    <p className="comment-notes">
                        <span id="email-notes">
                            Your email address will not be published.
                        </span>
                        Required fields are marked
                        <span className="required">*</span>
                    </p>
                    <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea
                            name="comment"
                            id="comment"
                            cols={45}
                            rows={5}
                            maxLength={65525}
                            required={true}
                            placeholder="Write your message... *"
                            class="form-control"
                            value={message}
                            onChange={(e) => setComment(e.target.value)}

                        />
                    </p>
                    <p className="comment-form-author">
                        <label>
                            Name <span className="required">*</span>
                        </label>
                        <input type="text"
                            id="author"
                            name="author"
                            required={true}
                            placeholder="Your Name *"
                            class="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </p>
                    <p className="comment-form-email">
                        <label>
                            Email <span className="required">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            required={true}
                            placeholder="Your email address *"
                            class="form-control"
                            onChange={(e) => setEmail(e.target.value)} />
                    </p>
                    <p className="comment-form-cookies-consent">
                        <input
                            type="checkbox"
                            defaultValue="yes"
                            name="comment-cookies-consent"
                            id="comment-cookies-consent"
                        />
                        <label htmlFor="comment-cookies-consent">
                            Save my name, email, and website in this browser for the
                            next time I comment.
                        </label>
                    </p>
                    <p className="form-submit">
                        <input
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
    )
}

export default CommentsArea
