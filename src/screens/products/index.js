import React from "react";
import GradiantCards from "../../components/cards/gradiantCards/gradiantCards";
import Herosection from "../../components/Sections/Hero/Herosection";
import Tabs from "../../components/tabs/tabs";
import Title from "../../components/title/title";
import { shapes } from "../../helper/ImageUrl";
import { products } from "../../helper/products";
import "./style.css";

const Products = () => {
  return (
    <>
      <Title title={"Our Latest Products"} data={shapes} />
      <input type="checkbox" id="switch" />
      <div class="app">
        <div class="body">
          <div class="content">
            <label for="switch">
              <div class="toggle"></div>
              <div class="names">
                {products.map((item) => (
                  <p class="light" onClick={(e) => console.log(item)}>
                    {item.name}
                  </p>
                ))}
              </div>
            </label>
          </div>
        </div>
      </div>
      <GradiantCards data={products} />
    </>
  );
};

export default Products;
