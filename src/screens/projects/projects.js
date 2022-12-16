import React from 'react'
import Title from '../../components/title/title'
import Shape1 from "../../assets/images/shape1-10.png"
import Shape3_7 from "../../assets/images/shape3-7.svg"
import Shape4_9 from "../../assets/images/shape4-9.svg"
import Shape5_5 from "../../assets/images/shape5-5.png"
import Shape2_10 from "../../assets/images/shape2-10.svg"
import ProjectCard from '../../components/project-card/projectCard'
import work_img_1 from '../../assets/images/works-image/works-image1.jpg'
import work_img_2 from '../../assets/images/works-image/works-image2.jpg'
import work_img_3 from '../../assets/images/works-image/works-image3.jpg'
import work_img_4 from '../../assets/images/works-image/works-image4.jpg'
import work_img_5 from '../../assets/images/works-image/works-image5.jpg'
import work_img_6 from '../../assets/images/works-image/works-image6.jpg'
import ProjectNestedCard from '../../components/project-nested-card/projectNestedCard'
import NetworkMarketing from '../../components/network-marketing/networkMarketing'

export default function Projects() {
  return (  <React.Fragment>
                <Title title={"Projects Style One"} 
                  data ={[
                            {imgUrl:Shape1,classNme:"shape1",alt:"shape"},
                            {imgUrl:Shape3_7,classNme:"shape2 rotateme",alt:"shape"},
                            {imgUrl:Shape4_9,classNme:"shape3",alt:"shape"},
                            {imgUrl:Shape5_5,classNme:"shape4",alt:"shape"},
                            {imgUrl:Shape4_9,classNme:"shape5",alt:"shape"},
                            {imgUrl:Shape4_9,classNme:"shape6 rotateme",alt:"shape"},
                            {imgUrl:Shape2_10,classNme:"shape7",alt:"shape"},                 
                            ]}/>    
                  <ProjectCard data = {[
                        {imgUrl:work_img_1,h3:"Incredible infrastructure",p:"Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."},
                        {imgUrl:work_img_2,h3:"UI/UX Design",p:"Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."},
                        {imgUrl:work_img_3,h3:"Apps Development",p:"Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."},
                        {imgUrl:work_img_4,h3:"Mock-up Design",p:"Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."},
                        {imgUrl:work_img_5,h3:"E-commerce",p:"Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."},
                        {imgUrl:work_img_6,h3:"Web Design",p:"Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."},
                        ]}/>
                  <ProjectNestedCard data={[{imgUrl:work_img_1},{imgUrl:work_img_1},{imgUrl:work_img_1},{imgUrl:work_img_1}]} />
                  <NetworkMarketing/>
             </React.Fragment>              
        )
}
