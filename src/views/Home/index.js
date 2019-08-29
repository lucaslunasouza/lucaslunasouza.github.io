import React from 'react'
import Profile from '../../components/Profile'
import ProjectList from '../../components/ProjectList'
import Pagination from '../../components/Pagination'
import {
  HomeContainer,
  ProjectsButtonContainer,
  ProjectsButton,
  ProjectListWrapper,
  ProjectListTitle
} from './style'
import {
  faCaretDown,
  faCaretUp
} from '@fortawesome/free-solid-svg-icons'
import strings from '../../shared/constants/strings'
import social from '../../shared/constants/social'
import projects from '../../shared/constants/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: localStorage.showInfo === 'true',
      currentPage: localStorage.currentPage ? parseInt(localStorage.currentPage) : 1
    }
    this.toggleShowInfo = this.toggleShowInfo.bind(this)
  }

  saveState() {
    localStorage.setItem('showInfo', this.state.showInfo);
    localStorage.setItem('currentPage', this.state.currentPage);
  }

  toggleShowInfo() {
    this.setState({ showInfo: !this.state.showInfo }, this.saveState)
  }

  getProjectsIcon() {
    return this.state.showInfo ? faCaretDown : faCaretUp
  }

  changePage(pageNumber) {
    this.setState({ currentPage: pageNumber }, this.saveState)
  }

  getProjects() {
    return projects.slice(6 * (this.state.currentPage - 1), 6 * (this.state.currentPage))
  }

  getNumPages() {
    return Math.ceil(projects.length / 6)
  }

  render () {
    return (
      <HomeContainer showInfo={this.state.showInfo}>
        <Profile
          name={strings.name}
          title={strings.title}
          social={social}
        />
        <ProjectsButtonContainer>
          <ProjectsButton
            showInfo={this.state.showInfo}
            onClick={this.toggleShowInfo}
          >
            {this.state.showInfo ? strings.portfolio : null}
            <FontAwesomeIcon icon={this.getProjectsIcon()} />
            {this.state.showInfo ? null : strings.back}
          </ProjectsButton>
        </ProjectsButtonContainer> 
        <ProjectListWrapper>
          <ProjectListTitle>{strings.projects}</ProjectListTitle>
          <ProjectList projects={this.getProjects()} />
          <Pagination
            numPages={this.getNumPages()}
            currentPage={this.state.currentPage}
            changePage={this.changePage.bind(this)}
          />
        </ProjectListWrapper>
      </HomeContainer>
    )
  }
}

export default Home
