import React from "react";
import './MailingList.css'

function MailingList() {
  return (
    <div className="mailingListContainer">
      <h1>Sign up to our Mailing list</h1>
      <p>to stay you to date with all things Wavy</p>
      <input type="email" name="email" id="email" />
      <span></span>
      <button type="submit">Submit</button>
    </div>
  );
}

export default MailingList;
