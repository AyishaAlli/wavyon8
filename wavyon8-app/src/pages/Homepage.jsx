import React from "react";

import Content from "../components/Content";
import MailingList from "../components/MailingList";
import Carousell from "../components/Carousel";
import Sponsors from "../components/Sponsors";

function Homepage() {
  return (
    <div>
      <Carousell />
      <Content />
      <Sponsors />
      <MailingList />
    </div>
  );
}

export default Homepage;
