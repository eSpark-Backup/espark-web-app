import React, { useEffect, useState } from "react";
import { getApiCall, getCatApiCall } from "./../../utils/Blogs";
import { ShimmerPostList } from "react-shimmer-effects";
import Button from "../../components/button/button";
import Herosection from "../../components/Sections/Hero/Herosection";
import heroImage from "../../assets/images/blog-image/blog-hero.png";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import BlogsCard from "../../components/blogs/blogsCard";
import BlogsBanner from "../../components/blogs/blogsBanner";
import BlogsStrip from "../../components/blogs/blogsStrip";

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
    <>
      <BlogsBanner title={`A Blog for Passionate People <br />and Technical lovers`}/>


      <div className={`row gx-2 p-10`}>
        <div className={`container align-self-center d-flex`}
        >
        {post ? (
                  post?.slice(0,2)?.map((items, key) => {
                    return (
          <div className="col-lg-4">
          <BlogsCard image={items.jetpack_featured_media_url} title={items.title.rendered}  para={items.excerpt.rendered}  link={`/`}  btext={`Read more`} />
          </div>
          )})):(
                  <ShimmerPostList
                    postStyle="STYLE_FOUR"
                    col={2}
                    row={1}
                    gap={30}
                  />
                )}

          <div className="col-lg-4">
          {post ? (
                  post?.slice(2,5)?.map((items, key) => {
                    return (
          <BlogsStrip title={items.title.rendered}  para={items.excerpt.rendered}  link={`/`}  btext={`Read more`} />
          )})):(
                  <ShimmerPostList
                    postStyle="STYLE_FOUR"
                    col={2}
                    row={1}
                    gap={30}
                  />
                )}
          </div>
        </div>
      </div>

      <div className={`row gx-2 p-10`}>
        <div className={`container align-self-center d-flex `}
        >{post ? (
                  post?.slice(5,9)?.map((items, key) => {
                    return (
          <div className="col-lg-3">
          <BlogsCard image={items.jetpack_featured_media_url} title={items.title.rendered}  para={items.excerpt.rendered}  link={`/`}  btext={`Read more`} />
          </div> )})):(
                  <ShimmerPostList
                    postStyle="STYLE_FOUR"
                    col={4}
                    row={1}
                    gap={30}
                  />
                )}
        </div>
      </div>

      <div className={`row gx-2 p-10`}>
        <div className={`container align-self-center d-flex`}
        >
          <div className="col-lg-5">
          {post ? (
                  post?.slice(9,12)?.map((items, key) => {
                    return (
          <BlogsStrip title={items.title.rendered}  para={items.excerpt.rendered}  link={`/`}  btext={`Read more`} />
          )})):(
                  <ShimmerPostList
                    postStyle="STYLE_FOUR"
                    col={2}
                    row={1}
                    gap={30}
                  />
                )}
          </div>
          <div className="col-lg-7">
          {post ? (
                  post?.slice(0,1)?.map((items, key) => {
                    return (
          <BlogsCard image={items.jetpack_featured_media_url} title={items.title.rendered}  para={items.excerpt.rendered}  link={`/`}  btext={`Read more`} />
          )})):(
                  <ShimmerPostList
                    postStyle="STYLE_FOUR"
                    col={4}
                    row={1}
                    gap={30}
                  />
                )}
          </div>
          
        </div>
      </div>
    </>
  );
}
