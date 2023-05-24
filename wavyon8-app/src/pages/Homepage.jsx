import React from "react";

import MailingList from "../components/MailingList/MailingList";
import Carousell from "../components/Carousel/Carousel";
import Sponsors from "../components/Sponsors/Sponsors";
import ArticleCard from "../components/Card/Card";
import YoutubeEmbed from "../components/Youtube/Youtube";

function Homepage() {
  return (
    <div>
      <Carousell />
      <ArticleCard />
      <YoutubeEmbed embedId="P1zMxVTvStM"/>
      <Sponsors />
      <MailingList />
    </div>
  );
}

export default Homepage;
