import styled from 'styled-components'
import theme from '../../shared/styles/theme'
import {
  TABLET_BREAKPOINT
} from '../../shared/styles/layout'

export const ProjectsGrid = styled.div`
  height: 65vh;
  width: 70vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: ${TABLET_BREAKPOINT}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`