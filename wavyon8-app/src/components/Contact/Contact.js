import React from "react";

import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const twitter = <FontAwesomeIcon icon={faTwitter} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const youtube = <FontAwesomeIcon icon={faYoutube} />;

function Contact() {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="contactContainer container mt-5">
      <h2 className="mb-3 contactUsTitle">CONTACT US</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-success" type="submit">
          {formStatus}
        </button>
      </form>
      <div className="contactDetails">
        <h3>Or Shoot us a Direct Message</h3>
          <span>Instagram <a href="https://www.instagram.com/wavyon8/?hl=en-gb" target={'_blank'}>@Wavyon8</a></span><br/>
          <span>Twitter <a href="https://twitter.com/wavyon8?lang=en-GB" target={'_blank'}>@Wavyon8</a></span>
      </div>
    </div>
  );
}

export default Contact;
