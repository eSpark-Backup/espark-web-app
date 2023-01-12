
import React, { useEffect, useState } from "react";
import BlogSideBar from '../../components/blogs/blogSideBar'
import BlogPagination from '../../components/blogs/blogPagination'
import BlogSection from '../../components/blogs/blogSection'
import CommentsArea from '../../components/blogs/commentsArea'

function BlogDetail() {
    
    return (
        <div className="row">
            <div className="col-lg-8 col-md-12">
                <BlogSection />
                <BlogPagination />
                <CommentsArea />
            </div>
            <div className="col-lg-4 col-md-12">
                <BlogSideBar />
            </div>
        </div>
    )
}

export default BlogDetail

