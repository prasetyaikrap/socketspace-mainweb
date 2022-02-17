import React from "react";
import { SolutionContent } from "./Content";
import { img } from "../Script";

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
      <h2>SOLUSI TEKNOLOGI UNTUK BISNIS ANDA</h2>
      <div className="solution-container">
        {SolutionContent.map((content) => (
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
