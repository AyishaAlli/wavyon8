import React, { useEffect, useState } from "react";
import "./MailingList.css";
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots, faL } from "@fortawesome/free-solid-svg-icons";

const baseUrl = 'http://localhost:8000'

const arrow = <FontAwesomeIcon icon={faArrowUpRightDots} />;

function MailingList() {

  const [email, setEmail] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the endpoint
    fetch(`${baseUrl}/submit-email`, {
      method: 'POST',
      body: JSON.stringify({ email}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      // Handle the response from the server
    })
    .catch(error => {
      console.error(error);
    });

    alert("Submited");
  };
  
  return (
    <div className="mailingListContainer">
      <div className="mailingListText">
      <h1 className="signUpText">Sign up to our Mailing list</h1>
      <p>to stay up to date with all things Wavy</p>
      </div>
      <form className="mailingListInputContainer" onSubmit={handleSubmit}>
        <input
          className="mailingListInput"
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit" className="mailingListSubmitBtn" onClick={(e)=> handleSubmit(e)}>
          SIGN UP{arrow}
        </button>
      </form>
    </div>
  );
}

export default MailingList;

