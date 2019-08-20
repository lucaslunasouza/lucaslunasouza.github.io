import React from 'react'
import {
  ProjectListContainer,
  ProjectListTitle
} from './style'
import strings from '../../shared/constants/strings'

const ProjectList = (props) => {
  return (
    <ProjectListContainer>
      <ProjectListTitle>{strings.projects}</ProjectListTitle>
    </ProjectListContainer>
  )
}

export default ProjectList