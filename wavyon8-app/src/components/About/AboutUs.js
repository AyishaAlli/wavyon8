import React from "react";
import "./AboutUs.css";

import adminTeam from "../../data/adminTeam";
import teamMembers from "../../data/teamMembers";

function AboutUs() {
  return (
    <div>
      <h1 className="teamTitle">Meet the Team</h1>
      <h2 className="adminTeamTitle">Admin</h2>
      <div className="teamPictures">
        {adminTeam.map((card, i) => (
          <figure>
            <img className="teamPhoto" src={card.imgScr} />
            <figcaption className="teamInfo">
              <p>
                {card.name}
                <br />
                {card.handle}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
      <h2 className="membersTeamTitle">Members</h2>
      <div className="membersPictures">
        {teamMembers.map((card, i) => (
          <figure>
            <img className="memberTeamPhoto" src={card.imgScr} />
            <figcaption className="teamInfo">
              <p className="membersTeamName">
                {card.name}
                <br />
                {card.handle}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
