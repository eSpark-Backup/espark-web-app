import React from 'react'
import { useParams } from 'react-router'
import ProjectNestedCard from '../../components/project-nested-card/projectNestedCard';
import { projects } from '../../helper/projects';


export default function ProjectDetails() {

  const params = useParams();
  const filterProjects = projects.filter(item => item.name == params.id);
  return (<ProjectNestedCard data={filterProjects}/>)
} 
