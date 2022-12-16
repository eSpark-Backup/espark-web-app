import React from 'react'
import Title from '../../components/title/title'
import Shape1 from "../../assets/images/shape1-10.png"
import Shape3_7 from "../../assets/images/shape3-7.svg"
import Shape4_9 from "../../assets/images/shape4-9.svg"
import Shape5_5 from "../../assets/images/shape5-5.png"
import Shape2_10 from "../../assets/images/shape2-10.svg"
import BlogCard from '../../components/blog-card/blogCard'
import blog1 from '../../assets/images/blog-image/blog1.jpg'
import Pagination from '../../components/pagination/pagination'

export default function Blog() {
  return (<React.Fragment>
                <Title title={"Blog Grid"} 
                                data ={[
                                            {imgUrl:Shape1,classNme:"shape1",alt:"shape"},
                                            {imgUrl:Shape3_7,classNme:"shape2 rotateme",alt:"shape"},
                                            {imgUrl:Shape4_9,classNme:"shape3",alt:"shape"},
                                            {imgUrl:Shape5_5,classNme:"shape4",alt:"shape"},
                                            {imgUrl:Shape4_9,classNme:"shape5",alt:"shape"},
                                            {imgUrl:Shape4_9,classNme:"shape6 rotateme",alt:"shape"},
                                            {imgUrl:Shape2_10,classNme:"shape7",alt:"shape"},                 
                                            ]}/> 
                                <BlogCard  data={[
                                    {imgUrl:blog1,btnName:"March 15, 2021",h3:"The Security Risks of Changing Package Owners",p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",p2:"Read More",span_1:"By",span_2:"Admin"},
                                    {imgUrl:blog1,btnName:"March 15, 2021",h3:"The Security Risks of Changing Package Owners",p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",p2:"Read More",span_1:"By",span_2:"Admin"},
                                    {imgUrl:blog1,btnName:"March 15, 2021",h3:"The Security Risks of Changing Package Owners",p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",p2:"Read More",span_1:"By",span_2:"Admin"},
                                    {imgUrl:blog1,btnName:"March 15, 2021",h3:"The Security Risks of Changing Package Owners",p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",p2:"Read More",span_1:"By",span_2:"Admin"},
                                    {imgUrl:blog1,btnName:"March 15, 2021",h3:"The Security Risks of Changing Package Owners",p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",p2:"Read More",span_1:"By",span_2:"Admin"},
                                    {imgUrl:blog1,btnName:"March 15, 2021",h3:"The Security Risks of Changing Package Owners",p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",p2:"Read More",span_1:"By",span_2:"Admin"},          
                                    ]}  />
                        <Pagination/>
        </React.Fragment>  )
}
