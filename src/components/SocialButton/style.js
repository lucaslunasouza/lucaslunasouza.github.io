import styled from 'styled-components'
import theme from '../../shared/styles/theme.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialButtonContainer = styled.a`
  background: ${theme.colors.bg.default};
  color: ${theme.colors.text.default};
  width: ${theme.fonts.sizes.section};
  height: ${theme.fonts.sizes.section};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
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
  &:active {
    transform: translateY(1px);
  }
`

export const SocialIcon = styled(FontAwesomeIcon)`
  font-size: ${theme.fonts.sizes.section};
`