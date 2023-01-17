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
            {/* <h3 className="comments-title">2 Comments:</h3>
            <ol className="comment-list">
                <li className="comment">
                    <article className="comment-body">
                        <footer className="comment-meta">
                            <div className="comment-author vcard">
                                <img
                                    src="/images/client-image/client1.jpg"
                                    className="avatar"
                                    alt="image"
                                />
                                <b className="fn">John Jones</b>
                                <span className="says">says:</span>
                            </div>
                            <div className="comment-metadata">
                                April 24, 2019 at 10:59 am
                            </div>
                        </footer>
                        <div className="comment-content">
                            <p>
                                Lorem Ipsum has been the industry’s standard dummy text
                                ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen.
                            </p>
                        </div>
                        <div className="reply">
                            <Link to="#" className="comment-reply-link">
                                Reply
                            </Link>
                        </div>
                    </article>
                    <ol className="children">
                        <li className="comment">
                            <article className="comment-body">
                                <footer className="comment-meta">
                                    <div className="comment-author vcard">
                                        <img
                                            src="/images/client-image/client2.jpg"
                                            className="avatar"
                                            alt="image"
                                        />
                                        <b className="fn">Steven Smith</b>
                                        <span className="says">says:</span>
                                    </div>
                                    <div className="comment-metadata">
                                        April 24, 2019 at 10:59 am
                                    </div>
                                </footer>
                                <div className="comment-content">
                                    <p>
                                        Lorem Ipsum has been the industry’s standard dummy
                                        text ever since the 1500s, when an unknown printer
                                        took a galley of type and scrambled it to make a
                                        type specimen.
                                    </p>
                                </div>
                                <div className="reply">
                                    <Link to="#" className="comment-reply-link">
                                        Reply
                                    </Link>
                                </div>
                            </article>
                        </li>
                        <ol className="children">
                            <li className="comment">
                                <article className="comment-body">
                                    <footer className="comment-meta">
                                        <div className="comment-author vcard">
                                            <img
                                                src="/images/client-image/client3.jpg"
                                                className="avatar"
                                                alt="image"
                                            />
                                            <b className="fn">Sarah Taylor</b>
                                            <span className="says">says:</span>
                                        </div>
                                        <div className="comment-metadata">
                                            April 24, 2019 at 10:59 am
                                        </div>
                                    </footer>
                                    <div className="comment-content">
                                        <p>
                                            Lorem Ipsum has been the industry’s standard dummy
                                            text ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a
                                            type specimen.
                                        </p>
                                    </div>
                                    <div className="reply">
                                        <Link to="#" className="comment-reply-link">
                                            Reply
                                        </Link>
                                    </div>
                                </article>
                            </li>
                        </ol>
                    </ol>
                </li>
                <li className="comment">
                    <article className="comment-body">
                        <footer className="comment-meta">
                            <div className="comment-author vcard">
                                <img
                                    src="/images/client-image/client4.jpg"
                                    className="avatar"
                                    alt="image"
                                />
                                <b className="fn">John Doe</b>
                                <span className="says">says:</span>
                            </div>
                            <div className="comment-metadata">
                                April 24, 2019 at 10:59 am
                            </div>
                        </footer>
                        <div className="comment-content">
                            <p>
                                Lorem Ipsum has been the industry’s standard dummy text
                                ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen.
                            </p>
                        </div>
                        <div className="reply">
                            <Link to="#" className="comment-reply-link">
                                Reply
                            </Link>
                        </div>
                    </article>
                    <ol className="children">
                        <li className="comment">
                            <article className="comment-body">
                                <footer className="comment-meta">
                                    <div className="comment-author vcard">
                                        <img
                                            src="/images/client-image/client5.jpg"
                                            className="avatar"
                                            alt="image"
                                        />
                                        <b className="fn">James Anderson</b>
                                        <span className="says">says:</span>
                                    </div>
                                    <div className="comment-metadata">
                                        April 24, 2019 at 10:59 am
                                    </div>
                                </footer>
                                <div className="comment-content">
                                    <p>
                                        Lorem Ipsum has been the industry’s standard dummy
                                        text ever since the 1500s, when an unknown printer
                                        took a galley of type and scrambled it to make a
                                        type specimen.
                                    </p>
                                </div>
                                <div className="reply">
                                    <Link to="#" className="comment-reply-link">
                                        Reply
                                    </Link>
                                </div>
                            </article>
                        </li>
                    </ol>
                </li>
            </ol> */}
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
