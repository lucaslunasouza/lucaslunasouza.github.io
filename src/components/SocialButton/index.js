import React from 'react'
import {
  SocialButtonContainer,
  SocialIcon,
  Tooltip
} from './style'

const SocialButton = (props) => {
  return (
    <SocialButtonContainer href={props.url} >
      <SocialIcon
        icon={props.icon}
      />
      <Tooltip>
        {props.tooltip}
      </Tooltip>
    </SocialButtonContainer>
  )
}

export default SocialButton