import styled from 'styled-components' 
import theme from '../../shared/styles/theme.js'

export const HomeContainer = styled.div`
  background: ${theme.colors.bg.default};
  color: ${theme.colors.text.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 180vh;
  min-width: 100vw;
  transition: transform 0.5s ease;
  transform: ${props => !props.showInfo ? 'translateY(-80vh)' : ''};
`

export const ProjectsButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
`

export const ProjectsButton = styled.div`
  animation: 0.5s ease-in 1.25s 1 fadeIn;
  animation-fill-mode: backwards;
  display: flex;
  font-weight: 100;
  font-size: ${theme.fonts.sizes.large};
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    padding: ${props => props.showInfo ? '0 0 10px 0' : '10px 0 0 0'};
  }
  &:active {
    padding: ${props => props.showInfo ? '10px 0 0 0' : '0 0 10px 0'};
  }
`

