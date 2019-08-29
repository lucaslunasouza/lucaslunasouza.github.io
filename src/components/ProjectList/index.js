import React from 'react'
import {
  ProjectsGrid,
  Project
} from './style'

const ProjectList = (props) => {

  const getProjects = () => {
    console.log(props.projects)
    return props.projects.map((project, index) => {
      return (
        <Project key={index}>{project.name}</Project>
      )
    })
  }

  return (
    <ProjectsGrid>
      {getProjects()}
    </ProjectsGrid>
  )
}

export default ProjectList