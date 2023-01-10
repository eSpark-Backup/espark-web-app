import React from 'react'

function SideBar() {
    return (
        <div>
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
                    <article className="item">
                        <a className="thumb" href="{blog Link}">
                            <span className="fullimage cover bg3" role="img" />
                        </a>
                        <div className="info">
                            <time>{date}</time>
                            <h4 className="title usmall">
                                <a href="{blog Link}">
                                    {blogTitle}
                                </a>
                            </h4>
                        </div>
                        <div className="clear" />
                    </article>
                </div>
                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>
                    <ul>
                        <li>
                            <a href="{catgorylink}">{catgoryname}</a>
                        </li>
                    </ul>
                </div>
                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>
                    <div className="tagcloud">
                        <a href="{taglink}">
                            {tagname} <span className="tag-link-count">({tagcount})</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
