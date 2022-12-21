import React from "react";
import GradiantCards from "../../components/cards/gradiantCards/gradiantCards";
import Herosection from "../../components/Sections/Hero/Herosection";
import Tabs from "../../components/tabs/tabs";
import Title from "../../components/title/title";
import { shapes } from "../../helper/ImageUrl";
import { products } from "../../helper/products";

const Products = () => {
  return (
    <div>
      <Title title={"Products Filter"} data={shapes} />
      <Tabs data={products} />
    </div>

  );
};

export default Products;
