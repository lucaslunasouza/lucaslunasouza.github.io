import styled from 'styled-components' 
import theme from '../../shared/styles/theme.js'

export const HomeContainer = styled.div`
  background: ${theme.colors.bg.default};
  color: ${theme.colors.text.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vw;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  transform: translateY(20vh);
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

export const ProjectsButton = styled.div`
  animation: 0.5s ease-in 1.25s 1 fadeIn;
  animation-fill-mode: backwards;
  display: flex;
  transform: translateY(-7vh);
  font-weight: 100;
  font-size: ${theme.fonts.sizes.large};
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-7.5vh);
  }
  &:active {
    transform: translateY(-6.5vh);
  }
`