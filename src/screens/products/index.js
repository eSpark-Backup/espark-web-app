import React, { useEffect, useState } from "react";
import GradiantCards from "../../components/cards/gradiantCards/gradiantCards";
import HeroSectionThree from "../../components/Hero/HeroSectionThree";
import Herosection from "../../components/Sections/Hero/Herosection";
import Tabs from "../../components/tabs/tabs";
import Title from "../../components/title/title";
import TwoColumns from "../../components/two-column/twoColumns";
import { shapes } from "../../helper/ImageUrl";
import { products } from "../../helper/products";
import "./style.css";

const Products = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    setProductData(products[0].data);
  }, []);

  return (
    <>
      <HeroSectionThree
        heading1={"Our Latast Products"}
        paragraph={
          "At this point, it may seem like overkill to point out the continued growth bound to happen in the Internet of Things space for the years to come and how it will create new opportunities for companies, both established and new, from a hardware and software perspective."
        }
      />
      <input type="checkbox" id="switch" />
      <div class="app">
        <div class="body">
          <div class="content">
            <label for="switch">
              <div class="toggle"></div>
              <div class="names">
                {products.map((item) => (
                  <p class="light" onClick={(e) => setProductData(item.data)}>
                    {item.name}
                  </p>
                ))}
              </div>
            </label>
          </div>
        </div>
      </div>
      {productData.length &&
        productData.map((item) => {
          return (
            <TwoColumns
              imgUrl={item.image}
              heading2={item.name}
              paragraph={item.detail}
              button={item.button}
              id={item.sectionId}
              link={item.routeLink}
            />
          );
        })}
    </>
  );
};

export default Products;
