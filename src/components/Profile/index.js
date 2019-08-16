import React from 'react'
import {
  ProfileContainer,
  ProfileWrapper,
  NameWrapper,
  TitleWrapper,
  DivisorLine,
  SocialButtonsContainer
} from './style'
import SocialButton from '../SocialButton';

const Profile = (props) => {
  const socialButtons = props.social.map((x, index) => {
    return (
      <SocialButton
        key={index}
        icon={x.icon}
        url={x.url}
      />
    )
  })

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <NameWrapper>
          {props.name}
        </NameWrapper>
        <TitleWrapper>
          {props.title}
        </TitleWrapper>
        <DivisorLine />
        <SocialButtonsContainer>
          {socialButtons}
        </SocialButtonsContainer>
      </ProfileWrapper>
    </ProfileContainer>
  )
}

export default Profile