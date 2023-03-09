import React, { useEffect, useState } from "react";
import { getApiCall, getCatApiCall } from "./../../utils/Blogs";
import { ShimmerPostList } from "react-shimmer-effects";
import Button from "../../components/button/button";
import Herosection from "../../components/Sections/Hero/Herosection";
import heroImage from "../../assets/images/blog-image/blog-hero.png";
import style from "./style.module.css";
import { Link } from "react-router-dom";

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
      <div className={`${style.topRow} row`}>
        <div className={`${style.topContainer} container align-self-center`}>
          <h1 className={`${style.topText}`}>A Blog for Passionate People <br />and Technical lovers</h1>
        </div>
      </div>

      <div className={`${style.blogRow} row p-10`}>
        <div className={`${style.blogContainer} container align-self-center d-flex`}
        >
          <div className="col-lg-4">
            <div className={`${style.blogsCard} `}>
              <img
                className={`${style.blogsCardImg}`}
                src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                alt="title"
              />
              <h2 className={`${style.blogsCardHeading}`}>Blog Title</h2>
              <p className={`${style.blogsCardPara}`}>Paragraph </p>
              <Link className={`${style.blogsCardbtn}`} to="/">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`${style.blogsCard} `}>
              <img
                className={`${style.blogsCardImg}`}
                src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                alt="title"
              />
              <h2 className={`${style.blogsCardHeading}`}>Blog Title</h2>
              <p className={`${style.blogsCardPara}`}>Paragraph </p>
              <Link className={`${style.blogsCardbtn}`} to="/">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`${style.blogsStrip} `}>
              <h2 className={`${style.blogsHeading}`}>Blog Title</h2>
              <p className={`${style.blogsPara}`}>Paragraph </p>
              <Link className={`${style.blogslink}`} to="/">
                Read More
              </Link>
            </div>
            <div className={`${style.blogsStrip} `}>
              <h2 className={`${style.blogsHeading}`}>Blog Title</h2>
              <p className={`${style.blogsPara}`}>Paragraph </p>
              <Link className={`${style.blogslink}`} to="/">
                Read More
              </Link>
            </div>
            <div className={`${style.blogsStrip} `}>
              <h2 className={`${style.blogsHeading}`}>Blog Title</h2>
              <p className={`${style.blogsPara}`}>Paragraph </p>
              <Link className={`${style.blogslink}`} to="/">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.blogRow} row p-10`}>
        <div className={`${style.blogContainer} container align-self-center d-flex `}
        >
          <div className="col-lg-3">
            <div className={`${style.blogsCard} `}>
              <img
                className={`${style.blogsCardImg}`}
                src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                alt="title"
              />
              <h2 className={`${style.blogsCardHeading}`}>Blog Title</h2>
              <p className={`${style.blogsCardPara}`}>Paragraph </p>
              <Link className={`${style.blogsCardbtn}`} to="/">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={`${style.blogsCard} `}>
              <img
                className={`${style.blogsCardImg}`}
                src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                alt="title"
              />
              <h2 className={`${style.blogsCardHeading}`}>Blog Title</h2>
              <p className={`${style.blogsCardPara}`}>Paragraph </p>
              <Link className={`${style.blogsCardbtn}`} to="/">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={`${style.blogsCard} `}>
              <img
                className={`${style.blogsCardImg}`}
                src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                alt="title"
              />
              <h2 className={`${style.blogsCardHeading}`}>Blog Title</h2>
              <p className={`${style.blogsCardPara}`}>Paragraph </p>
              <Link className={`${style.blogsCardbtn}`} to="/">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={`${style.blogsCard} `}>
              <img
                className={`${style.blogsCardImg}`}
                src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                alt="title"
              />
              <h2 className={`${style.blogsCardHeading}`}>Blog Title</h2>
              <p className={`${style.blogsCardPara}`}>Paragraph </p>
              <Link className={`${style.blogsCardbtn}`} to="/">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.blogRow} row p-10`}>
        <div className={`${style.blogContainer} container align-self-center d-flex`}
        >
          <div className="col-lg-5">
            <div className={`${style.blogsStrip} `}>
              <h2 className={`${style.blogsHeading}`}>Blog Title</h2>
              <p className={`${style.blogsPara}`}>Paragraph </p>
              <Link className={`${style.blogslink}`} to="/">
                Read More
              </Link>
            </div>
            <div className={`${style.blogsStrip} `}>
              <h2 className={`${style.blogsHeading}`}>Blog Title</h2>
              <p className={`${style.blogsPara}`}>Paragraph </p>
              <Link className={`${style.blogslink}`} to="/">
                Read More
              </Link>
            </div>
            <div className={`${style.blogsStrip} `}>
              <h2 className={`${style.blogsHeading}`}>Blog Title</h2>
              <p className={`${style.blogsPara}`}>Paragraph </p>
              <Link className={`${style.blogslink}`} to="/">
                Read More
              </Link>
            </div>
            <div className={`${style.blogsStrip} `}>
              <h2 className={`${style.blogsHeading}`}>Blog Title</h2>
              <p className={`${style.blogsPara}`}>Paragraph </p>
              <Link className={`${style.blogslink}`} to="/">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className={`${style.blogsCard} `}>
              <img
                className={`${style.blogsCardImg}`}
                src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
                alt="title"
              />
              <h2 className={`${style.blogsCardHeading}`}>Blog Title</h2>
              <p className={`${style.blogsCardPara}`}>Paragraph </p>
              <Link className={`${style.blogsCardbtn}`} to="/">
                Read More
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
