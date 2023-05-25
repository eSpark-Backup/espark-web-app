import React from "react";
import  "./style.css";
import Button from "../../components/button/button";

function NotFound() {
  return (
    <>
      <div  className="notFoundWrapper">
    <section class="wrapper">

        <div class="container">
            <div  data-hover-only="false">
                <div class="circle" data-depth="1.2"></div>

                <div class="one1" data-depth="0.9">
                    <div class="content">
                        <span class="piece"></span>
                        <span class="piece"></span>
                        <span class="piece"></span>
                    </div>
                </div>

                <div class="two2" data-depth="0.60">
                    <div class="content">
                        <span class="piece"></span>
                        <span class="piece"></span>
                        <span class="piece"></span>
                    </div>
                </div>

                <div class="three3" data-depth="0.40">
                    <div class="content">
                        <span class="piece"></span>
                        <span class="piece"></span>
                        <span class="piece"></span>
                    </div>
                </div>

                <p class="p404" data-depth="0.50">404</p>
                <p class="p404" data-depth="0.10">404</p>

            </div>

            <div class="text">
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
