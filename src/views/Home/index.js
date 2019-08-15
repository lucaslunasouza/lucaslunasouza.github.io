import React from 'react'
import {
  HomeContainer,
  InfoContainer,
  NameWrapper,
  TitleWrapper,
  DivisorLine,
  SocialButtonsContainer,
  ProjectsButton
} from './style'
import SocialButton from '../../components/SocialButton'
import {
  faEnvelope,
  faFileAlt,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import strings from '../../shared/constants/strings'
import links from '../../shared/constants/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends React.Component {
  getSocialButtons() {
    const data = [
      {
        icon: faLinkedinIn,
        url: links.linkedIn
      },
      {
        icon: faGithub,
        url: links.github
      },
      {
        icon: faEnvelope,
        url: links.email
      },
      {
        icon: faFileAlt,
        url: links.resume
      }
    ]
    return data.map(x => {
      return (
        <SocialButton
          icon={x.icon}
          url={x.url}
        />
      )
    })
  }

  render () {
    return (
      <HomeContainer>
        <InfoContainer>
          <NameWrapper>
            {strings.name}
          </NameWrapper>
          <TitleWrapper>
            {strings.title}
          </TitleWrapper>
          <DivisorLine />
          <SocialButtonsContainer>
            {this.getSocialButtons()}
          </SocialButtonsContainer>
        </InfoContainer>
        <ProjectsButton>
          {strings.portfolio}
          <FontAwesomeIcon icon={faCaretDown} />
        </ProjectsButton>
      </HomeContainer>
    )
  }
}

export default Home
