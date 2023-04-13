import React from "react";
import "./AboutUs.css";

import shakeel from "../../images/team/shakeel.png";
import ayisha from "../../images/team/ayisha.jpg";
import shanice from "../../images/team/shanice.jpg";
import millz from "../../images/team/millz.jpg";
import alicia from "../../images/team/alicia.jpg";

function AboutUs() {
  const admin = [
    { imgScr: shakeel, name: "Shakeel Kidd-smith", handle: "@Shakeelks" },
    { imgScr: ayisha, name: "Ayisha Alli", handle: "@ayyskates" },
    { imgScr: millz, name: "Emile St Hilaire", handle: "@mr_st_hilaire" },
    { imgScr: shanice, name: "Shanice Sheppherd", handle: "@shanice" },
    { imgScr: alicia, name: "Alicia Miller", handle: "@alixworld" },
  ];
  const team = [
    { imgScr: shakeel, name: "Shakeel Kidd-smith", handle: "@Shakeelks" },
    { imgScr: ayisha, name: "Ayisha Alli", handle: "@ayyskates" },
    { imgScr: millz, name: "Emile St Hilaire", handle: "@mr_st_hilaire" },
    { imgScr: shanice, name: "Shanice Sheppherd", handle: "@shanice" },
    { imgScr: alicia, name: "Alicia Miller", handle: "@alixworld" },
    { imgScr: shakeel, name: "Shakeel Kidd-smith", handle: "@Shakeelks" },
    { imgScr: ayisha, name: "Ayisha Alli", handle: "@ayyskates" },
    { imgScr: millz, name: "Emile St Hilaire", handle: "@mr_st_hilaire" },
    { imgScr: shanice, name: "Shanice Sheppherd", handle: "@shanice" },
    { imgScr: alicia, name: "Alicia Miller", handle: "@alixworld" },
    { imgScr: shakeel, name: "Shakeel Kidd-smith", handle: "@Shakeelks" },
    { imgScr: ayisha, name: "Ayisha Alli", handle: "@ayyskates" },
    { imgScr: millz, name: "Emile St Hilaire", handle: "@mr_st_hilaire" },
    { imgScr: shanice, name: "Shanice Sheppherd", handle: "@shanice" },
    { imgScr: alicia, name: "Alicia Miller", handle: "@alixworld" },
    { imgScr: shakeel, name: "Shakeel Kidd-smith", handle: "@Shakeelks" },
    { imgScr: ayisha, name: "Ayisha Alli", handle: "@ayyskates" },
    { imgScr: millz, name: "Emile St Hilaire", handle: "@mr_st_hilaire" },
    { imgScr: shanice, name: "Shanice Sheppherd", handle: "@shanice" },
    { imgScr: alicia, name: "Alicia Miller", handle: "@alixworld" },
    { imgScr: shakeel, name: "Shakeel Kidd-smith", handle: "@Shakeelks" },
    { imgScr: ayisha, name: "Ayisha Alli", handle: "@ayyskates" },
    { imgScr: millz, name: "Emile St Hilaire", handle: "@mr_st_hilaire" },
    { imgScr: shanice, name: "Shanice Sheppherd", handle: "@shanice" },
    { imgScr: alicia, name: "Alicia Miller", handle: "@alixworld" },
  ];

  return (
    <div>
      <h1 className="teamTitle">Meet the Team</h1>
      <h2 className="adminTeamTitle">Admin</h2>
      <div className="teamPictures">
        {admin.map((card, i) => (
          <figure>
            <img
              className="teamPhoto"
              src={card.imgScr}
              width={200}
              height={200}
            />
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
        {team.map((card, i) => (
          <figure>
            <img
              className="memberTeamPhoto"
              src={card.imgScr}
              width={200}
              height={200}
            />
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
    </div>
  );
}

export default AboutUs;
