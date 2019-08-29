import React from 'react'
import {
  ProjectContainer,
  ProjectTitle,
  ProjectTitleWrapper,
  DivisorLine,
  ProjectTypeWrapper,
  ProjectTypeIcon,
  ProjectTypeName,
  ProjectTechnologies,
  ProjectDescription
} from './style'


const Project = (props) => {

  const getTechnologies = () => {
    return props.technologies.join(', ')
  }

  return (
    <ProjectContainer>
      <ProjectTitleWrapper>
        <ProjectTitle href={props.link}>{props.name}</ProjectTitle>
        <DivisorLine />
      </ProjectTitleWrapper>
      <ProjectTypeWrapper>
        <ProjectTypeIcon icon={props.type.icon} />
        <ProjectTypeName>{props.type.name}</ProjectTypeName>
      </ProjectTypeWrapper>
      <ProjectTechnologies>{getTechnologies()}</ProjectTechnologies>
      <ProjectDescription>{props.description}</ProjectDescription>
    </ProjectContainer>
  )
}

export default Project