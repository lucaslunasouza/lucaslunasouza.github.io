import styled from 'styled-components' 
import theme from '../../shared/styles/theme.js'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
`

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  transform: translateY(-5vh);
`

export const NameWrapper = styled.div`
  animation: 0.5s ease-in 0s 1 fadeIn;
  animation-fill-mode: backwards;
  font-size: ${theme.fonts.sizes.title};
  font-weight: 200;
`

export const TitleWrapper = styled.div`
  animation: 0.5s ease-in 0.5s 1 fadeIn;
  animation-fill-mode: backwards;
  font-size: ${theme.fonts.sizes.main};
  font-weight: 100;
`

export const DivisorLine = styled.div`
  width: 70%;
  animation: 0.25s ease-in 1s 1 expand;
  animation-fill-mode: backwards;
  border-bottom: 1px solid ${theme.colors.text.default};
  opacity: 0.3;
  margin: 15px 0 15px 0;
`

export const SocialButtonsContainer = styled.div`
  animation: 0.5s ease-in 1.25s 1 fadeIn;
  animation-fill-mode: backwards;
  display: flex;
`