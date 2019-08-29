import styled from 'styled-components'
import theme from '../../shared/styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Tooltip = styled.div`
  position: absolute;
  transform: translateY(40px);
  opacity: 0;
  color: ${theme.colors.text.default};
  transition: opacity 0.5s ease;
  font-size: ${theme.fonts.sizes.default};
  cursor: default;
  pointer-events: none;
  user-select: none;
`

export const SocialButtonContainer = styled.a`
  background: ${theme.colors.bg.default};
  color: ${theme.colors.text.default};
  width: ${theme.fonts.sizes.section};
  height: ${theme.fonts.sizes.section};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  box-shadow: 0px 0px 1px white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 5px;
  transition: all 0.2s ease;
  &:hover {
    background: ${theme.colors.bg.reverse};
    color: ${theme.colors.text.reverse};
    transform: translateY(-1px);
  }
  &:hover ${Tooltip} {
    opacity: 1;
  }
  &:active {
    transform: translateY(1px);
  }
`

export const SocialIcon = styled(FontAwesomeIcon)`
  font-size: ${theme.fonts.sizes.section};
`
