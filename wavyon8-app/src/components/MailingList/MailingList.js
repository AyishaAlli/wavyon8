import React from "react";
import "./MailingList.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

const arrow = <FontAwesomeIcon icon={faArrowUpRightDots} />;
function MailingList() {
  return (
    <div className="mailingListContainer">
      <div className="mailingListText">
      <h1 className="signUpText">Sign up to our Mailing list</h1>
      <p>to stay up to date with all things Wavy</p>
      </div>
      <span className="mailingListInputContainer">
        <input
          className="mailingListInput"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <button type="submit" className="mailingListSubmitBtn">
          SIGN UP{arrow}
        </button>
      </span>
    </div>
  );
}

export default MailingList;
