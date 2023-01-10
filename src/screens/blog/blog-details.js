import React from 'react'
import BlogPagination from "../components/blogs/blogPagination";
import CommentsArea from "../components/blogs/commentsArea";
import SideBar from "../components/blogs/sideBar";
import BlogDetails from "./blog/blog-details";


import React from 'react'

function BlogDetails() {
    return (
        <div className="row">
            <div className="col-lg-8 col-md-12">
                <BlogDetails />
                <BlogPagination />
                <CommentsArea />
            </div>
            <div className="col-lg-4 col-md-12">
                <SideBar />
            </div>
        </div>
    )
}

export default BlogDetails

