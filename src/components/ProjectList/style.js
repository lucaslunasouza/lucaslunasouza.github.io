import styled from 'styled-components'
import {
  TABLET_BREAKPOINT
} from '../../shared/styles/layout'
import theme from '../../shared/styles/theme'

export const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 0.5s ease-in 0s 1 fadeIn;
  animation-fill-mode: backwards;
`

export const ProjectListTitle = styled.div`
  font-size: ${theme.fonts.sizes.main};
  margin-bottom: 50px;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}) {
    margin-bottom: 20px;
  }
`

export const ProjectsGrid = styled.div`
  height: 65vh;
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 30px;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}) {
    grid-template-columns: repeat(2, 1fr);
    height: 55vh;
    width: 90vw;
    grid-row-gap: 30px;
  }
`
