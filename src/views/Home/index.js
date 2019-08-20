import React from 'react'
import Profile from '../../components/Profile'
import ProjectList from '../../components/ProjectList'
import {
  HomeContainer,
  ProjectsButtonContainer,
  ProjectsButton
} from './style'
import {
  faCaretDown,
  faCaretUp
} from '@fortawesome/free-solid-svg-icons'
import strings from '../../shared/constants/strings'
import social from '../../shared/constants/social'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showInfo: localStorage.showInfo === 'true' }
    this.toggleShowInfo = this.toggleShowInfo.bind(this)
  }

  saveState() {
    const local = this.state.showInfo;
    localStorage.setItem('showInfo', local);
  }

  toggleShowInfo() {
    this.setState({ showInfo: !this.state.showInfo }, this.saveState)
  }

  getProjectsIcon() {
    return this.state.showInfo ? faCaretDown : faCaretUp
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
        <ProjectList />
      </HomeContainer>
    )
  }
}

export default Home
