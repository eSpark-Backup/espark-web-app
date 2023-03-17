import React, { useEffect, useState } from "react";
import {
  BlogCardMap,
  BlogImageMap,
  BlogStripMap,
  getApiCall,
  getCatApiCall,
} from "./../../utils/Blogs";
import style from "../../components/blogs/style.module.css";
import BlogsBanner from "../../components/blogs/blogsBanner";

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
      <BlogsBanner
        title={`A Blog for Passionate People and Technical lovers`}
      />
      <div className={`${style.one} row gx-2 mt-5`}>
        <div className={`container-fluid align-self-center d-flex`}>
          <BlogCardMap
            post={post}
            sliceStart={0}
            sliceEnd={2}
            className="col-lg-4 col-md-6 col-sm-12"
            col={2}
            row={1}
            gap={30}
            shimmerClass="col-lg-8 col-md-12 col-sm-12"
            word={50}
          />

          <div className={`${style.scroll} col-lg-4 col-md-12 col-sm-12`}>
            <BlogStripMap
              post={post}
              sliceStart={2}
              sliceEnd={7}
              shimmerCount={3}
              shimmerClass="p-20 mx-10"
            />
          </div>
        </div>
      </div>

      <div className={`${style.two} row gx-2 mt-5`}>
        <div className={`container-fluid align-self-center d-flex`}>
          <BlogCardMap
            post={post}
            sliceStart={7}
            sliceEnd={11}
            className="col-lg-3 col-md-6 col-sm-12"
            col={4}
            row={1}
            gap={30}
            shimmerClass="col-lg-12 col-md-12 col-sm-12"
          />
        </div>
      </div>

      <div className={`${style.three} row gx-2`}>
        <div className={`container-fluid d-flex`}>
          <div className="col-lg-5 col-md-12 col-sm-12 align-self-start">
            <BlogStripMap
              post={post}
              sliceStart={11}
              sliceEnd={14}
              shimmerCount={3}
              shimmerClass="p-20 mx-10"
            />
          </div>

          <div className="col-lg-7 col-md-12 col-sm-12 align-self-start">
            <BlogImageMap
              post={post}
              sliceStart={14}
              sliceEnd={15}
              shimmerCount={1}
              shimmerClass="p-20 mx-10 col-lg-12 h-100"
            />
          </div>
        </div>

        <div className={`container-fluid d-flex`}>
          <div className="col-lg-5 col-md-12 col-sm-12 align-self-start">
            <BlogStripMap
              post={post}
              sliceStart={13}
              sliceEnd={14}
              shimmerCount={1}
              shimmerClass="p-20 mx-10"
            />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 align-self-start">
            <BlogStripMap
              post={post}
              sliceStart={14}
              sliceEnd={15}
              shimmerCount={1}
              shimmerClass="p-20 mx-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
