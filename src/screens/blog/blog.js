import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaRegArrowAltCircleRight } from "react-icons/fa";
import Moment from "react-moment";
import BlogSideBar from "../../components/blogs/blogSideBar";
import { shapes } from "./../../helper/ImageUrl";
import { getApiCall, getCatApiCall } from "./../../utils/Blogs";
import { Link } from "react-router-dom";
import { ShimmerPostList } from "react-shimmer-effects";
import Button from "../../components/button/button";

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
    console.log(data.data);
  };

  const nextPost = async () => {

    setCount(count + 1)
    if (count <= totalPages) {
      const data = await getApiCall(count);
      setTotalPages(data.headers["x-wp-totalpages"]);
      setPost(data.data);
    }

    // const data = await getApiCall(count);
    // setPost(data);
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
                              <Link to={`/blog-detail/${items.slug}/`}>
                                <img
                                  src={
                                    items.jetpack_featured_media_url
                                      ? items.jetpack_featured_media_url
                                      : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                                  }
                                  class="animate__animated animate__zoomIn"
                                  alt="blog-img"
                                />
                              </Link>
                              <div class="date d-flex justify-content-center align-items-center">
                                <FaCalendarAlt size={15} />
                                <Moment format="YYYY/MM/DD hh:mm">
                                  {items.date}
                                </Moment>
                              </div>
                            </div>
                            <div class="blog-post-content">
                              <h3>
                                <Button title={items.title.rendered} link={`/blog-detail/${items.slug}/`} design={7} />
                              </h3>
                              <span>
                                By <Button title="Admin " link="#" design={7} />
                              </span>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: items.excerpt.rendered,
                                }}
                              ></p>
                              <Button title="Read More " link={`/blog-detail/${items.slug}/`} design={6} size={15} />
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <ShimmerPostList
                    postStyle="STYLE_FOUR"
                    col={2}
                    row={2}
                    gap={30}
                  />
                )}
                <div class="col-lg-12 col-md-12 row">
                  <div class="col-lg-6 col-md-6"><Button title="< Previous" onClick={() => prvPost()} design={3} disabled={count === 1 ? true : false} /></div>
                  <div class="col-lg-6 col-md-6 text-right"><Button title="Next >" onClick={() => nextPost()} design={3} disabled={count === Number(totalPages) ? true : false} /></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <BlogSideBar catagoryPosts={(e) => catPost(e)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
