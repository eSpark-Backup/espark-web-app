import React from 'react'

function BlogPagination() {
    return (
        <div className="startp-post-navigation">
            <div className="prev-link-wrapper">
                <div className="info-prev-link-wrapper">
                    <a href="{PrevBlogURL}">
                        <span className="image-prev">
                            <img src="{PrevBlogmedia}" alt="{PrevBlogtitle}" />
                            <span className="post-nav-title">Prev</span>
                        </span>
                        <span className="prev-link-info-wrapper">
                            <span className="prev-title">
                                {PrevBlogTitle}
                            </span>
                            <span className="meta-wrapper">
                                <span className="date-post">{PrevBlogDate}</span>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
            <div className="next-link-wrapper">
                <div className="info-next-link-wrapper">
                    <a href="{NextBlogLink}">
                        <span className="next-link-info-wrapper">
                            <span className="next-title">
                                {NextBlogTitle}
                            </span>
                            <span className="meta-wrapper">
                                <span className="date-post">{NextBlogdate}</span>
                            </span>
                        </span>
                        <span className="image-next">
                            <img src="{Next Blog Media}" alt="image" />
                            <span className="post-nav-title">Next</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogPagination
