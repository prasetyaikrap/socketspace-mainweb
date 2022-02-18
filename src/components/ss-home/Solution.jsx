import React from "react";
import content from "./Content";
import { img } from "../Script";

//variable
const sectionTitle = content.en_EN.solution.sectionTitle;
const solutionContent = content.en_EN.solution.solutionContent;

function SolutionCard(props) {
  return (
    <figure className="solution-content">
      <img src={img(props.logo)} alt={props.alt} />
      <h3>{props.title}</h3>
      <figcaption>{props.desc}</figcaption>
    </figure>
  );
}

//RenderPage
function Solution() {
  return (
    <section id="solution">
      <h2>{sectionTitle.toUpperCase()}</h2>
      <div className="solution-container">
        {solutionContent.map((content) => (
          <SolutionCard
            key={content.id}
            title={content.title}
            desc={content.desc}
            logo={content.logo}
            alt={content.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Solution;
