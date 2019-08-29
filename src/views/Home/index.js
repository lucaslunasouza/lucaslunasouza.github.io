import React from 'react'
import Profile from '../../components/Profile'
import ProjectList from '../../components/ProjectList'
import Pagination from '../../components/Pagination'
import {
  HomeContainer,
  ProjectsButtonContainer,
  ProjectsButton,
  ProjectListWrapper,
} from './style'
import {
  faCaretDown,
  faCaretUp
} from '@fortawesome/free-solid-svg-icons'
import strings from '../../shared/constants/strings'
import social from '../../shared/constants/social'
import projects from '../../shared/constants/projects'
import {
  PROJECTS_PER_PAGE,
} from '../../shared/styles/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: localStorage.showInfo !== 'false',
      currentPage: localStorage.currentPage ? parseInt(localStorage.currentPage) : 1,
    }
    this.toggleShowInfo = this.toggleShowInfo.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(e) {
    if ((e.deltaY < 0 && !this.state.showInfo) ||
        (e.deltaY > 0 && this.state.showInfo)) {
      this.toggleShowInfo()
    }
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
    return projects.slice(
      PROJECTS_PER_PAGE * (this.state.currentPage - 1),
      PROJECTS_PER_PAGE * (this.state.currentPage)
    )
  }

  getNumPages() {
    return Math.ceil(projects.length / PROJECTS_PER_PAGE)
  }

  render () {
    return (
      <HomeContainer onWheel={this.handleScroll} showInfo={this.state.showInfo}>
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
