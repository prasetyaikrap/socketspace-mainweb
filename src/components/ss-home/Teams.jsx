import React from "react";
import content from "./Content";
import { img } from "../Script";

//variable
const sectionTitle = content.en_EN.teams.sectionTitle;
const teamsContent = content.en_EN.teams.teamsContent;

function TeamsCard(props) {
  return (
    <figure className="teams-card">
      <img src={img(props.img)} alt={props.name} />
      <h3>{props.name.toUpperCase()}</h3>
      <h4>{props.position}</h4>
      <figcaption>
        <a href={props.linkedinurl}>{props.linkedin}</a>
        <a href={props.instagramurl}>{props.instagram}</a>
      </figcaption>
    </figure>
  );
}
function Teams() {
  return (
    <section id="teams">
      <h2>{sectionTitle.toUpperCase()}</h2>
      <div className="teams-container">
        {teamsContent.map((content) => (
          <TeamsCard
            key={content.id}
            name={content.name}
            position={content.position}
            img={content.img}
            linkedin={content.linkedin}
            linkedinurl={content.linkedinurl}
            instagram={content.instagram}
            instagramurl={content.instagramurl}
          />
        ))}
        <div className="empty-teams"></div>
        <div className="empty-teams"></div>
        <div className="empty-teams"></div>
        <div className="empty-teams"></div>
      </div>
    </section>
  );
}

export default Teams;
