import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaRegArrowAltCircleRight } from "react-icons/fa";
import Moment from "react-moment";
import styles from "./style.module.css";
import { shapes } from "./../../helper/ImageUrl";
import { getApiCall } from "./../../utils/Blogs";

export default function Blog() {
  const [post, setPost] = useState();
  useEffect(() => {
    const main = async () => {
      const data = await getApiCall();
      setPost(data);
    };
    main();
  }, []);

  return (
    <div>
      {shapes?.map((item, index) => (
        <div key={index} className={item.className}>
          <img src={item.imgUrl} alt={item.alt} />{" "}
        </div>
      ))}
      <div class="blog-area ptb-80">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <div class="row justify-content-center">
                {post ? (
                  post?.map((items, key) => {
                    return (
                      <>
                        <div class="col-lg-6 col-md-6">
                          <div class="single-blog-post">
                            <div class="blog-image">
                              <a href="/blog-details/">
                                <img
                                  src={
                                    items.jetpack_featured_media_url
                                      ? items.jetpack_featured_media_url
                                      : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                                  }
                                  class="animate__animated animate__zoomIn"
                                  alt="blog-img"
                                />
                              </a>
                              <div class="date d-flex justify-content-center align-items-center">
                                <FaCalendarAlt size={15} />
                                <Moment format="YYYY/MM/DD hh:mm">
                                  {items.date}
                                </Moment>
                              </div>
                            </div>
                            <div class="blog-post-content">
                              <h3>
                                <a href="/blog-details/">
                                  {items.title.rendered}
                                </a>
                              </h3>
                              <span>
                                By <a href="#">Admin</a>
                              </span>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: items.excerpt.rendered,
                                }}
                              ></p>
                              <a class="read-more-btn" href={`/${items.slug}/`}>
                                Read More{"  "}
                                <FaRegArrowAltCircleRight />
                              </a>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <div class="d-flex justify-content-center">
                    <div class={`spinner-border ${styles.loader}` } role="status">
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="widget-area" id="secondary">
                <div class="widget widget_search">
                  <form class="search-form">
                    <label>
                      <input
                        type="search"
                        class="search-field"
                        placeholder="Search..."
                      />
                    </label>
                    <button type="submit">
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
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </form>
                </div>
                <div class="widget widget_startp_posts_thumb">
                  <h3 class="widget-title">Popular Posts</h3>
                  <article class="item">
                    <a class="thumb" href="/blog-details/">
                      <span class="fullimage cover bg1" role="img"></span>
                    </a>
                    <div class="info">
                      <time>June 10, 2021</time>
                      <h4 class="title usmall">
                        <a href="/blog-details/">
                          Making Peace With The Feast Or Famine Of Freelancing
                        </a>
                      </h4>
                    </div>
                    <div class="clear"></div>
                  </article>
                  <article class="item">
                    <a class="thumb" href="/blog-details/">
                      <span class="fullimage cover bg2" role="img"></span>
                    </a>
                    <div class="info">
                      <time>June 21, 2021</time>
                      <h4 class="title usmall">
                        <a href="/blog-details/">
                          I Used The Web For A Day On A 50 MB Budget
                        </a>
                      </h4>
                    </div>
                    <div class="clear"></div>
                  </article>
                  <article class="item">
                    <a class="thumb" href="/blog-details/">
                      <span class="fullimage cover bg3" role="img"></span>
                    </a>
                    <div class="info">
                      <time>June 30, 2021</time>
                      <h4 class="title usmall">
                        <a href="/blog-details/">
                          How To Create A Responsive Popup Gallery?
                        </a>
                      </h4>
                    </div>
                    <div class="clear"></div>
                  </article>
                </div>
                <div class="widget widget_categories">
                  <h3 class="widget-title">Categories</h3>
                  <ul>
                    <li>
                      <a href="/blog-1/">Business</a>
                    </li>
                    <li>
                      <a href="/blog-1/">Privacy</a>
                    </li>
                    <li>
                      <a href="/blog-1/">Technology</a>
                    </li>
                    <li>
                      <a href="/blog-1/">Tips</a>
                    </li>
                    <li>
                      <a href="/blog-1/">Uncategorized</a>
                    </li>
                  </ul>
                </div>
                <div class="widget widget_tag_cloud">
                  <h3 class="widget-title">Tags</h3>
                  <div class="tagcloud">
                    <a href="/blog-1/">
                      IT <span class="tag-link-count">(3)</span>
                    </a>
                    <a href="/blog-1/">
                      Spacle <span class="tag-link-count">(3)</span>
                    </a>
                    <a href="/blog-1/">
                      Games <span class="tag-link-count">(2)</span>
                    </a>
                    <a href="/blog-1/">
                      Fashion <span class="tag-link-count">(2)</span>
                    </a>
                    <a href="/blog-1/">
                      Travel <span class="tag-link-count">(1)</span>
                    </a>
                    <a href="/blog-1/">
                      Smart <span class="tag-link-count">(1)</span>
                    </a>
                    <a href="/blog-1/">
                      Marketing <span class="tag-link-count">(1)</span>
                    </a>
                    <a href="/blog-1/">
                      Tips <span class="tag-link-count">(2)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
