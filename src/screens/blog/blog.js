import React, { useEffect, useState } from "react";
import { getApiCall, getCatApiCall } from "./../../utils/Blogs";
import style from "../../components/blogs/style.module.css";
import BlogsCard from "../../components/blogs/blogsCard";
import BlogsBanner from "../../components/blogs/blogsBanner";
import BlogsStrip from "../../components/blogs/blogsStrip";
import { ShimmerContentBlock, ShimmerPostItem } from "react-shimmer-effects";

export default function Blog() {
  const [post, setPost] = useState();
  const [count, setCount] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const numbers = [1, 2, 3, 4, 5];
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

      <div className={`${style.one} row gx-2 p-10`}>
        <div className={`container align-self-center d-flex`}>
          {post ? (
            post?.slice(0, 2)?.map((items, key) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <BlogsCard
                    image={items.jetpack_featured_media_url}
                    title={items.title.rendered}
                    para={items.excerpt.rendered}
                    link={`/blogs/${items.slug}`}
                    btn_text={`Read more`}
                  />
                </div>
              );
            })
          ) : (
            <>
              {numbers.slice(0, 2).map((item) => {
                return <ShimmerPostItem card title text cta imageWidth="80%" />;
              })}
            </>
          )}

          <div className={`${style.scroll} col-lg-4 col-md-12 col-sm-12`}>
            {post ? (
              post?.slice(2,7)?.map((items, key) => {
                return (
                  <BlogsStrip
                    title={items.title.rendered}
                    para={items.excerpt.rendered}
                    link={`/blogs/${items.slug}`}
                    btn_text={`Read more`}
                  />
                );
              })
            ) : (
              <>
                {numbers.slice(0, 3).map((item) => {
                  return <ShimmerContentBlock text thumbnailHeight={200} />;
                })}
              </>
            )}
          </div>
        </div>
      </div>

      <div className={`${style.two} row gx-2  p-10`}>
        <div className={`container align-self-center d-flex `}>
          {post ? (
            post?.slice(7, 11)?.map((items, key) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                  <BlogsCard
                    image={items.jetpack_featured_media_url}
                    title={items.title.rendered}
                    para={items.excerpt.rendered}
                    link={`/blogs/${items.slug}`}
                    btn_text={`Read more`}
                  />
                </div>
              );
            })
          ) : (
            <>
              {numbers.slice(0, 4).map((item) => {
                return <ShimmerPostItem card title text cta imageWidth="80%" />;
              })}
            </>
          )}
        </div>
      </div>

      <div className={`${style.three} row gx-2 p-10`}>
        <div className={`container d-flex`}>
          <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
            {post ? (
              post?.slice(11, 15)?.map((items, key) => {
                return (
                  <BlogsStrip
                    title={items.title.rendered}
                    para={items.excerpt.rendered}
                    link={`/blogs/${items.slug}`}
                    btn_text={`Read more`}
                  />
                );
              })
            ) : (
              <>
                {numbers.slice(0, 4).map((item) => {
                  return (
                    <ShimmerContentBlock text thumbnailHeight={200} gap={20} />
                  );
                })}
              </>
            )}
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 align-self-start ">
            {post ? (
              post?.slice(15, 16)?.map((items, key) => {
                return (
                  <>
                    <BlogsCard
                      image={items.jetpack_featured_media_url}
                      title={items.title.rendered}
                      para={items.excerpt.rendered}
                      link={`/blogs/${items.slug}`}
                      btn_text={`Read more`}
                    />
                  </>
                );
              })
            ) : (
              <>
                <ShimmerPostItem card title text cta imageWidth="80%" />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
