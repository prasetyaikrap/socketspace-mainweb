import React from "react";
import content from "./Content";
import { img } from "../Script";

//variable
const sectionTitle = content.en_EN.product.sectionTitle;
const productContent = content.en_EN.product.productContent;
const learnbutton = content.en_EN.product.learn;

function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={img(props.logo)} alt={props.alt} />
      <h3>{props.title}</h3>
      <div className="pc-subtitle">{props.subtitle}</div>
      <div className="pc-desc">{props.desc}</div>
      <a className="btn-learn" href={props.url}>
        {props.learnbtn}
      </a>
    </div>
  );
}

function Product() {
  return (
    <section id="product">
      <h2>{sectionTitle.toUpperCase()}</h2>
      <div className="product-container">
        {productContent.map((content) => (
          <ProductCard
            key={content.id}
            title={content.title}
            subtitle={content.subtitle}
            desc={content.desc}
            logo={content.logo}
            alt={content.alt}
            url={content.url}
            learnbtn={learnbutton}
          />
        ))}
        <div className="empty-product"></div>
        <div className="empty-product"></div>
      </div>
    </section>
  );
}

export default Product;
