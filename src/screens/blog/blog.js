import React, { useEffect, useState } from "react";
import {
  BlogCardMap,
  BlogImageMap,
  BlogStripMap,
  getApiCall,
  getCatApiCall,
} from "./../../utils/Blogs";
import "../../components/blogs/blogRedesign.css";
import BlogsBanner from "../../components/blogs/blogsBanner";
import BlogCardRedesign from "../../components/blogs/blogCardRedesign";
import { ShimmerPostList } from "react-shimmer-effects";

export default function Blog() {
  const [post, setPost] = useState();
  const [count, setCount] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const main = async () => {
      const data = await getApiCall();
      setTotalPages(data.headers["x-wp-totalpages"]);
      setPost(data.data);
      console.log("post", post);
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
    <div >
      <BlogsBanner
        title={`A Blog for Passionate People <br/> and  Technical lovers`}
        className="blogsBaners"
      />
      <div className="row blogFirstSectionMargin">
        {post ? (
          post?.slice(0, 2)?.map((items) => (
            <div className="col-sm-12 col-md-12 col-lg-4 ps-1  ">
              <BlogCardRedesign
                cardSelection="largeCards"
                para={items.excerpt.rendered}
                link={`/blogs/${items.id}`}
                wordLimit={46}
                image={items.jetpack_featured_media_url}
                limitedtitle={items.title.rendered}
                btn_text={`Read more`}
              />
            </div>
          ))
        ) : (
          <div className=" col-sm-12 col-md-12 col-lg-8  ">
            <ShimmerPostList postStyle="STYLE_FOUR" col={2} row={1} gap={30} />
          </div>
        )}
        <div
          className={`scroll col-lg-4  col-md-12 col-sm-12    d-flex flex-direction-column justify-content-between  `}
        >
          <BlogStripMap
            post={post}
            sliceStart={2}
            sliceEnd={6}
            shimmerCount={3}
            shimmerClass="p-20 mx-10"
          />
        </div>
      </div>
      <div className="row  w-75 m-auto blogSecondSection">
        {post ? (
          post?.slice(7, 11)?.map((items) => (
            <div className=" col-sm-12 col-md-6 col-lg-3  mt-5">
              <BlogCardRedesign
                cardSelection="smallCards"
                para={items.excerpt.rendered}
                link={`/blogs/${items.id}`}
                wordLimit={46}
                image={items.jetpack_featured_media_url}
                limitedtitle={items.title.rendered}
                btn_text={`Read more`}
              />
            </div>
          ))
        ) : (
          <div className=" col-sm-12 col-md-12 col-lg-8  ">
            <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={1} gap={30} />
          </div>
        )}
      </div>

      {/* <div className={`${style.two} row gx-2 mt-5`}>
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
      </div> */}

      <div className="row blogThirdSection m-auto mt-5">
        <div className="col-lg-5 col-md-12 col-sm-12   d-flex flex-direction-column justify-content-between ps-4 pb-3 ">
          <BlogStripMap
            post={post}
            sliceStart={11}
            sliceEnd={14}
            shimmerCount={3}
            shimmerClass="p-20 mx-10"
          />
        </div>

        <div className="col-lg-7 col-md-12 col-sm-12   d-flex justify-content-center">
          <BlogImageMap
            post={post}
            sliceStart={14}
            sliceEnd={15}
            shimmerCount={1}
            shimmerClass="p-20 mx-10 col-lg-12 h-100"
          />
        </div>
      </div>

      <div className={`row m-auto  blogThirdSection  my-4`}>
        <div className="col-lg-5 col-md-12 col-sm-12 ps-4">
          <BlogStripMap
            post={post}
            sliceStart={13}
            sliceEnd={14}
            shimmerCount={1}
            shimmerClass="p-20 mx-10"
          />
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 p-0 paddingMbleScreen">
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
  );
}
