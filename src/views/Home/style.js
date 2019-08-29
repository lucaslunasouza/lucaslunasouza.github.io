import styled from 'styled-components' 
import theme from '../../shared/styles/theme'

export const HomeContainer = styled.div`
  background: ${theme.colors.bg.default};
  color: ${theme.colors.text.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 185vh;
  min-width: 100vw;
  transition: transform 0.5s ease;
  transform: ${props => !props.showInfo ? 'translateY(-85vh)' : ''};
`

export const ProjectsButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
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
  padding: 25px;
  &:hover {
    margin: ${props => props.showInfo ? '0 0 15px 0' : '15px 0 0 0'};
  }
  &:active {
    margin: ${props => props.showInfo ? '15px 0 0 0' : '0 0 15px 0'};
  }
`

export const ProjectListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  font-weight: 200;
  justify-content: space-between;
`
