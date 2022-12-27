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
  const [active, setActive] = useState(1);

  useEffect(() => {
    setProductData(products[0]);
    setActive(1);
  }, []);

  const setData = (item) => {
    setActive(item.id);
    setProductData(item);
  };


  return (
    <>
      <HeroSectionThree
        heading1={productData?.name}
        paragraph={
          "At this point, it may seem like overkill to point out the continued growth bound to happen in the Internet of Things space for the years to come and how it will create new opportunities for companies, both established and new, from a hardware and software perspective."
        }
        image={productData?.image}
      />
      {/* <input type="checkbox" id="switch" />
      <div class="app">
        <div class="body">
          <div class="content">
            <label for="switch" onClick={(e) => console.log(e.target)}>
              <div class="toggle" ></div>
              <div class="names">
                
              </div>
            </label>
          </div>
        </div>
      </div> */}
      <div className="text-center">
        <div class="multi-button">
          {products.map((item) => {
            return (
              <button
                className={active === item.id && "active"}
                onClick={() => setData(item)}
              >
                {item.id === 1 ? (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5741/5741483.png"
                    alt=""
                    width={50}
                  />
                ) : (
                  <img
                    src="https://static.thenounproject.com/png/1871497-200.png"
                    alt=""
                    width={50}
                  />
                )}{" "}
                &nbsp; {item.name}
              </button>
            );
          })}
        </div>
      </div>
      {productData?.data?.length &&
        productData?.data.map((item) => {
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
