import React from "react";
import { ProductContent } from "./Content";
import { img } from "../Script";

function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={img(props.logo)} alt={props.alt} />
      <h3>{props.title}</h3>
      <div className="pc-subtitle">{props.subtitle}</div>
      <div className="pc-desc">{props.desc}</div>
      <button>Pelajari</button>
    </div>
  );
}

function Product() {
  return (
    <section id="product">
      <h2>PRODUK KAMI</h2>
      <div className="product-container">
        {ProductContent.map((content) => (
          <ProductCard
            key={content.id}
            title={content.title}
            subtitle={content.subtitle}
            desc={content.desc}
            logo={content.logo}
            alt={content.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Product;
