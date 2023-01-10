import React from 'react'

function BlogSection() {
    return (
        <div className="blog-details-desc">
            <div className="article-image">
                <img src="{feature image}" alt="{blog_title}" />
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
                            {blog - date}
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
                <h2>{blog_title}</h2>
                <div>
                    {blog_content}
                </div>
            </div>
            <div className="article-footer">
                <div className="article-tags">
                    <a href="{tag_url}">{tag_name}</a>
                </div>
            </div>
        </div>
    )
}

export default BlogSection
