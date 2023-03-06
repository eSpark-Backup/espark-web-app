import React, { useEffect, useState } from "react";
import { getApiCall, getCatApiCall } from "./../../utils/Blogs";
import { ShimmerPostList } from "react-shimmer-effects";
import Button from "../../components/button/button";
import Herosection from "../../components/Sections/Hero/Herosection";
import heroImage from "../../assets/images/blog-image/blog-hero.png";

export default function Blog() {
  const [post, setPost] = useState();
  const [count, setCount] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const main = async () => {
      const data = await getApiCall();
      setTotalPages(data.headers["x-wp-totalpages"]);
      setPost(data.data);
    };
    main();
  }, []);

  const catPost = async (e) => {
    const data = await getCatApiCall(e);
    setPost(data.data);
  };

  const nextPost = async () => {
    setCount(count + 1);
    if (count <= totalPages) {
      const data = await getApiCall(count);
      setTotalPages(data.headers["x-wp-totalpages"]);
      setPost(data.data);
    }
  };

  const prvPost = async () => {
    setCount(count - 1);
    if (count === totalPages) {
      const data = await getApiCall(count);
      setTotalPages(data.headers["x-wp-totalpages"]);
      setPost(data.data);
    }
  };

  return (
    <div>
      <Herosection
        title={"Lorem ipsum dolor sit amet"}
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
        images={heroImage}
        ShowButton={true}
        buttonText={"Learn More"}
        buttonUrl={"/services/"}
      />
      <div class="blog-area ptb-80">
        <div class="container" style={{ width: "80%" }}>
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="row justify-content-center">
                {post ? (
                  post?.slice(0,4)?.map((items, key) => {
                    return (
                      <>
                        <div class="col-xl-3 col-lg-4 col-md-6 mt-5">
                          <div class="single-blog-post">
                            <div class="blog-image">
                              <img
                                src={
                                  items.jetpack_featured_media_url
                                    ? items.jetpack_featured_media_url
                                    : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                                }
                                class="animate__animated animate__zoomIn"
                                alt="blog-img"
                              />
                            </div>
                            <div class="blog-post-content">
                              <h3>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </h3>
                              <br />
                              <p
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
                                }}
                              ></p>
                              <br />
                              <Button
                                title="Learn More"
                                // link={`/blog-detail/${items.slug}/`}
                                design={11}
                                size={15}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <ShimmerPostList
                    postStyle="STYLE_FOUR"
                    col={4}
                    row={2}
                    gap={30}
                  />
                )}
                {/* <div class="col-lg-12 col-md-12 row">
                  <div class="col-lg-6 col-md-6">
                    <Button
                      title="< Previous"
                      onClick={() => prvPost()}
                      design={3}
                      disabled={count === 1 ? true : false}
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 text-right">
                    <Button
                      title="Next >"
                      onClick={() => nextPost()}
                      design={3}
                      disabled={count === Number(totalPages) ? true : false}
                    />
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div class="col-lg-4 col-md-12">
              <BlogSideBar catagoryPosts={(e) => catPost(e)} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
