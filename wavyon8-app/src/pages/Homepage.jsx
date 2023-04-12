import React from "react";

import MailingList from "../components/MailingList/MailingList";
import Carousell from "../components/Carousel/Carousel";
import Sponsors from "../components/Sponsors/Sponsors";
import ArticleCard from "../components/Card/Card";

function Homepage() {
  return (
    <div>
      <Carousell />
      <ArticleCard />
      <Sponsors />
      <MailingList />
    </div>
  );
}

export default Homepage;
