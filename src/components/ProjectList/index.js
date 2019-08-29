import React from 'react'
import {
  ProjectListContainer,
  ProjectListTitle,
  ProjectsGrid
} from './style'
import strings from '../../shared/constants/strings'
import Project from '../Project'

const ProjectList = (props) => {
  const getProjects = () => {
    return props.projects.map((project, index) => {
      return (
        <Project
          key={index}
          name={project.name}
          type={project.type}
          link={project.link}
          technologies={project.technologies}
          description={project.description}
        />
      )
    })
  }

  return (
    <ProjectListContainer key={props.projects[0].name}>
      <ProjectListTitle>{strings.projects}</ProjectListTitle>
      <ProjectsGrid>
        {getProjects()}
      </ProjectsGrid>
    </ProjectListContainer>
  )
}

export default ProjectList