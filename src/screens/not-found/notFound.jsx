import React from "react";
import  "./style.css";
import Button from "../../components/button/button";

function NotFound() {
  return (
    <>
      <div  className="notFoundWrapper">
    <section className="wrapper">

        <div className="container">
            <div  data-hover-only="false">
                <div className="circle" data-depth="1.2"></div>

                <div className="one1" data-depth="0.9">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <div className="two2" data-depth="0.60">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <div className="three3" data-depth="0.40">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>

                <p className="p404" data-depth="0.50">404</p>
                <p className="p404" data-depth="0.10">404</p>

            </div>

            <div className="text">
                <article>
                    <p>The page you requested cannot be displayed right now. Try Diffrent 
          page.</p>
          <br/>
                    <Button title="Back to home" link="/" design={1} />
                </article>
            </div>

        </div>
    </section>
      </div>
    </>
  );
}

export default NotFound;
