import React from 'react'
import {
  SocialButtonContainer,
  SocialIcon
} from './style'

const SocialButton = (props) => {
  return (
    <SocialButtonContainer href={props.url} >
      <SocialIcon
        icon={props.icon}
      />
    </SocialButtonContainer>
  )
}

export default SocialButton