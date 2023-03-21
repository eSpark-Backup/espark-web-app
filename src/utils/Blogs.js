import Axios from "axios";
import {
  ShimmerContentBlock,
  ShimmerPostItem,
  ShimmerPostList,
  ShimmerSectionHeader,
  ShimmerText,
  ShimmerThumbnail,
  ShimmerTitle,
} from "react-shimmer-effects";
import BlogsCard from "../components/blogs/blogsCard";
import BlogsStrip from "../components/blogs/blogsStrip";
import style from "../components/blogs/style.module.css";
export const getApiCall = async (page) => {
  try {
    const pageCount = page ? page : 1;
    const { data, headers } = await Axios.get(
      `https://esparkconsultants.com/old/wp-json/wp/v2/posts?per_page=20&page=${pageCount}`
    );
    return { data: data, headers: headers };
  } catch (error) {
    console.log("API Error: ", error);
  }
};
export const getCategoriesApiCall = async () => {
  try {
    const { data } = await Axios.get(
      `https://esparkconsultants.com/old/wp-json/wp/v2/categories`
    );
    return data;
  } catch (error) {
    console.log("API Error: ", error);
  }
};
export const getTagsApiCall = async () => {
  try {
    const { data } = await Axios.get(
      `https://esparkconsultants.com/old/wp-json/wp/v2/tags`
    );
    return data;
  } catch (error) {
    console.log("API Error: ", error);
  }
};

export const getCatApiCall = async (id) => {
  try {
    const { data, headers } = await Axios.get(
      `https://esparkconsultants.com/old/wp-json/wp/v2/posts?categories=${id}`
    );
    return { data: data, headers: headers };
  } catch (error) {
    console.log("API Error: ", error);
  }
};

export const Shimmer = ({ col, row, gap, className }) => {
  return (
    <div className={className}>
      <ShimmerPostList postStyle="STYLE_FOUR" col={col} row={row} gap={gap} />
    </div>
  );
};

export const BlogCardMap = ({
  post,
  sliceStart,
  sliceEnd,
  col,
  row,
  gap,
  className,
  shimmerClass,
  word,
}) => {
  return (
    <>
      {post ? (
        post?.slice(sliceStart, sliceEnd)?.map((items) => {
          return (
            <div className={className}>
              <BlogsCard
                image={items.jetpack_featured_media_url}
                title={items.title.rendered}
                para={items.excerpt.rendered}
                // link={`/blogs/${items.slug}`}
                link={`/blogs/${items.id}`}
                btn_text={`Read more`}
                word={word}
              />
            </div>
          );
        })
      ) : (
        <div className={shimmerClass}>
          <ShimmerPostList
            postStyle="STYLE_FOUR"
            col={col}
            row={row}
            gap={gap}
          />
        </div>
      )}
    </>
  );
};

export const BlogStripMap = ({
  post,
  sliceStart,
  sliceEnd,
  shimmerCount,
  shimmerClass,
}) => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      {post ? (
        post?.slice(sliceStart, sliceEnd)?.map((items) => {
          return (
            <BlogsStrip
              title={items.title.rendered}
              para={items.excerpt.rendered}
              link={`/blogs/${items.id}`}
              btn_text={`Read more`}
            />
          );
        })
      ) : (
        <div className={shimmerClass}>
          {numbers.slice(0, shimmerCount).map((item) => {
            return (
              <>
                <ShimmerTitle line={1} gap={10} variant="primary" />
                <ShimmerText line={6} gap={10} />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export const BlogImageMap = ({ post, sliceStart, sliceEnd, shimmerClass }) => {
  return (
    <>
      {post ? (
        post?.slice(sliceStart, sliceEnd)?.map((items) => {
          const imageUrl =
            items?.jetpack_featured_media_url ||
            "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg";
          return (
            <>
              <img className={style.images} src={imageUrl} alt="shape" />
            </>
          );
        })
      ) : (
        <>
          <div className={shimmerClass}>
            <ShimmerThumbnail height={600} rounded />
          </div>
        </>
      )}
    </>
  );
};
