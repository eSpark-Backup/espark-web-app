import React from "react";
import GradiantCards from "../../components/cards/gradiantCards/gradiantCards";
import Herosection from "../../components/Sections/Hero/Herosection";
import Title from "../../components/title/title";
import { shapes } from "../../helper/ImageUrl";
import { products } from "../../helper/products";

const Products = () => {
  return (
    <div>
      <Title title={"Products Filter"} data={shapes} />
    </div>
  );
};

export default Products;
