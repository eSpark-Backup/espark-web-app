import React from 'react'
import shape2 from "../../../../src/assets/images/shape2.svg";
import shape3 from "../../../../src/assets/images/shape3.svg";
import shape4 from "../../../../src/assets/images/shape4.svg";
import shape5 from "../../../../src/assets/images/shape5.png";


import blog9 from "../../../../src/assets/images/blog-image/blog9.jpg";
import blog10 from "../../../../src/assets/images/blog-image/blog10.jpg";
import blog11 from "../../../../src/assets/images/blog-image/blog11.jpg";


function RecentStory() {
  return (
    <div>
        <div class="blog-area ptb-80">
        <div class="container">
          <div class="section-title">
            <h2>Our Recent Story</h2>
            <div class="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-post-box">
                <div class="entry-thumbnail">
                  <a href="/blog-details"
                    ><img src={blog9} alt="image"
                  /></a>
                </div>
                <div class="entry-post-content">
                  <div class="entry-meta">
                    <ul>
                      <li><a href="index.htm#">Admin</a></li>
                      <li>August 15, 2021</li>
                    </ul>
                  </div>
                  <h3>
                    <a href="/blog-details"
                      >Making Peace With The Feast Or Famine Of Freelancing</a
                    >
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>
                  <a class="learn-more-btn" href="/blog-details"
                    >Read Story
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line></svg
                  ></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-post-box">
                <div class="entry-thumbnail">
                  <a href="/blog-details"
                    ><img src={blog10} alt="image"
                  /></a>
                </div>
                <div class="entry-post-content">
                  <div class="entry-meta">
                    <ul>
                      <li><a href="index.htm#">Admin</a></li>
                      <li>August 18, 2019</li>
                    </ul>
                  </div>
                  <h3>
                    <a href="/blog-details"
                      >I Used The Web For A Day On A 50 MB Budget</a
                    >
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>
                  <a class="learn-more-btn" href="/blog-details"
                    >Read Story
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line></svg
                  ></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div class="single-blog-post-box">
                <div class="entry-thumbnail">
                  <a href="/blog-details"
                    ><img src={blog11} alt="image"
                  /></a>
                </div>
                <div class="entry-post-content">
                  <div class="entry-meta">
                    <ul>
                      <li><a href="index.htm#">Admin</a></li>
                      <li>August 15, 2019</li>
                    </ul>
                  </div>
                  <h3>
                    <a href="/blog-details"
                      >Here are the 5 most telling signs of micromanagement</a
                    >
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>
                  <a class="learn-more-btn" href="/blog-details"
                    >Read Story
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line></svg
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="shape1"><img src={shape5} alt="shape" /></div>
        <div class="shape2 rotateme">
          <img src={shape2} alt="shape" />
        </div>
        <div class="shape3"><img src={shape3} alt="shape" /></div>
        <div class="shape4"><img src={shape4} alt="shape" /></div>
        <div class="shape7"><img src={shape4} alt="shape" /></div>
        <div class="shape8 rotateme">
          <img src={shape2} alt="shape" />
        </div>
      </div>
    </div>
  )
}

export default RecentStory