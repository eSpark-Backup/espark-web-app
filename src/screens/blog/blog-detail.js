import React from "react";
import CommentsArea from "../../components/blogs/commentsArea";
import { useParams } from "react-router-dom";
import { getApiCall } from "../../utils/Blogs";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../../components/button/button";
import "./blog.css";
import {
  ShimmerPostList,
  ShimmerText,
  ShimmerTitle,
} from "react-shimmer-effects";

function BlogDetail() {
  let { id } = useParams();
  const [post, setPost] = useState([]);
  const [blog, setBlog] = useState([]);
  const numbers = [1, 2, 3, 4, 5];

  useEffect(() => {
    const main = async () => {
      const data = await getApiCall();
      let postDetails = data.data.filter((item) => item.id == id);
      setBlog(data.data.slice(0, 2));
      setPost([...postDetails]);
    };
    main();
  }, []);

  return (
    <>
      {post[0] ? (
        <div class="blog-details-area ptb-80">
          <div class="container-fluid">
            <div class="row">
              <div className="col-lg-12 col-md-12 ">
                <div className="w-100 text-center">
                  <Button design={8} title={"Category"}></Button>
                  <div className="w-100 m-auto my-5">
                    <h3 className="text-center text-black fw-bold">
                      {post && post[0]?.title.rendered}
                    </h3>
                  </div>
                  <div className="w-100 h-100 imgBarMargin">
                    <img
                      src={
                        post && post[0]?.jetpack_featured_media_url
                          ? post[0]?.jetpack_featured_media_url
                          : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                      }
                      width="100%"
                      alt="blog-details"
                    />
                  </div>
                  {post[0] && (
                    <p
                      className={` my-auto text-justify paragraph`}
                      style={{ lineHeight: 30 }}
                      dangerouslySetInnerHTML={{
                        __html: post[0]?.content.rendered,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row imagesWrapper padingBotom">
            {blog?.map((item, index) => (
              <div className="col-6 col-sm-6 col-md-6 p-0 m-0">
                <div className="w-100 h-100  position-relative mainDivWrapper">
                  <div className="divPosition imgDiv">
                    <img
                      width="100%"
                      height="100%"
                      src={item.jetpack_featured_media_url}
                    ></img>
                  </div>
                  <div className="divPosition txtDiv ">
                    <h6
                      className={
                        index == 0
                          ? "text-white titleImg"
                          : "text-white titleImgLeft "
                      }
                    >
                      {item.title.rendered}
                    </h6>
                  </div>
                  <div className="div-black-color-animation divPosition"></div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="container-fluid my-1 position-relative  ">
            <div className="commetArea">
              <CommentsArea />
            </div>
          </div> */}
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {numbers.slice(0, 3).map((item) => {
              return (
                <>
                  <div className="container-fluid  shimmerDivMargin">
                    <ShimmerPostList
                      postStyle="STYLE_FOUR"
                      col={1}
                      row={1}
                      gap={10}
                    />
                    <div className="my-4">
                      <ShimmerTitle line={1} gap={30} variant="primary" />
                      <ShimmerTitle line={1} gap={30} variant="primary" />
                      <ShimmerTitle line={1} gap={30} variant="primary" />
                      <ShimmerText line={30} gap={30} variant="primary" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default BlogDetail;
