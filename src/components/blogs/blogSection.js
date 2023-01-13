import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { getApiCall, getCategoriesApiCall, getTagsApiCall } from './../../utils/Blogs';


function BlogSection() {
    const params = useParams();
    const [post, setPost] = useState([])

    useEffect(() => {
        const main = async () => {
            const data = await getApiCall();
            setPost(data)
        }
        main();
    }, [])

    const filterData = post.filter((item) => item.slug === params.id);

    console.log(filterData);
    return (
        <>
            {filterData?.map((items, key) => {
                return (
                    <div className="blog-details-desc">
                        <div className="article-image">
                            <img src={items.jetpack_featured_media_url ? items.jetpack_featured_media_url : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"} alt="{items.title.rendered}" />
                        </div>
                        <div className="article-content">
                            <div className="entry-meta">
                                <ul>
                                    <li>
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
                                            <circle cx={12} cy={12} r={10} />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>{" "}
                                        <Moment format="YYYY/MM/DD hh:mm" >{items.date}</Moment>
                                    </li>
                                    <li>
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
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx={12} cy={7} r={4} />
                                        </svg>{" "}
                                        <a href="/">eSpark Consultants</a>
                                    </li>
                                </ul>
                            </div>
                            <h2>{items.title.rendered}</h2>
                            <div>
                                {items.content.rendered}
                            </div>
                        </div>
                    </div>)
            })}
            {/* {tags?.map((items, key) => {
                return (
                    <div>
                        <div className="article-footer">
                            <div className="article-tags">
                                <a href={`/${items.slug}/`}>{`/${items.name}/`}</a>
                            </div>
                        </div>
                    </div>)
            })} */}

            {/* {categories?.map((items, key) => {
                return (
                    <div>
                        <div className="article-footer">
                            <div className="article-tags">
                                <a href={`/${items.slug}/`}>{`/${items.name}/`}</a>
                            </div>
                        </div>
                    </div>)
            })} */}

        </>
    )
}

export default BlogSection
