import React, {useEffect, useState} from "react";
import CommentsArea from "../../components/blogs/commentsArea";
import { useParams,useNavigate  } from "react-router-dom";
import { getApiCall } from "../../utils/Blogs";
import Button from "../../components/button/button";
import "./blog.css";
import {
  ShimmerPostList,
  ShimmerText,
  ShimmerTitle,
} from "react-shimmer-effects";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function BlogDetail() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [blog, setBlog] = useState([]);
  const [posts, setPosts] = useState([]);
  const [route, setRoute] = useState();
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [isPreveButtonDisabled, setIsPreveButtonDisabled] = useState(false);
  const numbers = [1, 2, 3, 4, 5];

  useEffect(() => {
    const main = async () => {
      const data = await getApiCall();
      const getUpdatedPost = (posts) => {
        const updated = posts?.map((post, i =0)=>{
           return {
             ...post,
             postid: i+1
           }
         })
         return updated
       }
  
       const updatedPost = getUpdatedPost(data.data);
       setPosts(updatedPost)
       let postDetails = updatedPost.filter((item) => item.id == id);

      setBlog(data.data.slice(0, 2));
      setPost([...postDetails]);
    };
    main();
  }, []);


  useEffect(() => {
    if (post.length > 0) {
      navigate(`/blogs/${post[0]?.id}`);
      if (posts.length == post[0]?.postid) {
        setIsNextButtonDisabled(true);
        setIsPreveButtonDisabled(false);
      } else if (1 == post[0]?.postid) {
        setIsPreveButtonDisabled(true);
      }
      setRoute(`/blogs/${post[0]?.id}`);
    }
  }, [post, posts]);

  
  const nextBtn = (post)=>{
    navigate(route)
    const postId = post[0].postid + 1;
    let postDetails = posts.filter((item) => item.postid === postId);
    setPost(postDetails)
    setIsPreveButtonDisabled(false)
  }
  const preveBtn = (post)=>{
    const postId = post[0].postid - 1;
    let postDetails = posts.filter((item) => item.postid === postId);
    navigate(route)
    setPost(postDetails)
    setIsNextButtonDisabled(false)

  }
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
            <div className="d-flex justify-content-between">
              <div >
              <button type="button" class="prevButon d-flex align-items-center" disabled={isPreveButtonDisabled} onClick={()=> preveBtn(post)}>
                <div className="ms-auto iconwrappers">
                  <FaArrowLeft className="icon ms-auto"/>  
                </div>
               </button>

              </div>
              <div >
              <button type="button" class="nextButon d-flex align-items-center" disabled={isNextButtonDisabled} onClick={()=> nextBtn(post)}>
                <div className="ms-auto iconwrappers" >
                 <FaArrowRight  className="icon ms-auto"/>
                </div>
              </button>
              </div>
            </div>
          </div>

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
