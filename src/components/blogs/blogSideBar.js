import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import {
  getApiCall,
  getCategoriesApiCall,
  getTagsApiCall,
} from "./../../utils/Blogs";
import { Link } from "react-router-dom";
import {
  ShimmerText,
  ShimmerThumbnail,
  ShimmerButton,

} from "react-shimmer-effects";
import { ShemarLengths, ShemarLength } from "../../helper/Shemars";


function BlogSideBar({ catagoryPosts }) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const main = async () => {
      const data = await getApiCall();
      setPost(data);
    };
    main();
  }, []);

  const [tags, setTags] = useState();
  useEffect(() => {
    const main = async () => {
      const tagsdata = await getTagsApiCall();
      setTags(tagsdata);
    };
    main();
  }, []);

  const [categories, setCategories] = useState();
  useEffect(() => {
    const main = async () => {
      const categoriesdata = await getCategoriesApiCall();
      setCategories(categoriesdata);
    };
    main();
  }, []);
  

  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_search">
          <form className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </button>
          </form>
        </div>
        <div className="widget widget_startp_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>
          {post.length ? (
            post?.slice(0, 3).map((items, key) => {
              return (
                <article className="item">
                  <Link className="thumb" to={`/blog-detail/${items.slug}/`}>
                    <img
                      src={
                        items.jetpack_featured_media_url
                          ? items.jetpack_featured_media_url
                          : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                      }
                      class="fullimage cover bg3"
                      alt={items.title.rendered}
                    />
                  </Link>
                  <div className="info">
                    <time>
                      {" "}
                      <Moment format="YYYY/MM/DD hh:mm">{items.date}</Moment>
                    </time>
                    <h4 className="title usmall">
                      <Link to={`/blog-detail/${items.slug}/`}>
                        {items.title.rendered}
                      </Link>
                    </h4>
                  </div>
                  <div className="clear" />
                </article>
              );
            })
          ) : (
            <div className="mt-5">
              {ShemarLength.map((item) => {
                return (
                  <div class="d-flex">
                    <div class="col-lg-4">
                      <ShimmerThumbnail
                        height={90}
                        width={90}
                        categoryStyle="STYLE_THREE"
                      />
                    </div>
                    <div class="col-lg-8">
                      <ShimmerText
                        line={3}
                        gap={10}
                        items={3}
                        categoryStyle="STYLE_THREE"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>
          {categories ? (
            categories?.map((items, key) => {
              return (
                <ul>
                  <li>
                    <a onClick={() => catagoryPosts(items.id)}>{items.name}</a>
                  </li>
                </ul>
              );
            })
          ) : (
            <div className="col-lg-4">
              <ShimmerText line={12} gap={10} />
            </div>
          )}
        </div>
        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            {tags ? (
              tags?.map((items, key) => {
                console.log(items, "items");
                return (
                  <Link to={`/blogs/${items.slug}/`}>
                    {items.name}{" "}
                    <span className="tag-link-count">({items.count})</span>
                  </Link>
                );
              })
            ) : (
              <div className="row">
                {ShemarLengths?.map((items, key) => {
                  return (
                    <span className="col-lg-4">
                      <ShimmerButton />
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSideBar;
