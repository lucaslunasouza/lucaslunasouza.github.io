import styled from 'styled-components'
import theme from '../../shared/styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TABLET_BREAKPOINT } from '../../shared/styles/layout'

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProjectTitle = styled.a`
  font-size: ${theme.fonts.sizes.header};
  color: ${theme.colors.text.default};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const ProjectTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const DivisorLine = styled.div`
  width: 60%;
  border-bottom: 1px solid ${theme.colors.text.default};
  opacity: 0.15;
  margin: 10px 0 25px 0;
`

export const ProjectTypeWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ProjectTypeIcon = styled(FontAwesomeIcon)`
  font-size: ${theme.fonts.sizes.section};
`

export const ProjectTypeName = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: ${theme.fonts.sizes.nav};
`

export const ProjectTechnologies = styled.div`
  margin-top: 5px;
  font-size: ${theme.fonts.sizes.default};
  text-align: center;
`

export const ProjectDescription = styled.div`
  margin-top: 15px;
  font-size: ${theme.fonts.sizes.large};
  text-align: center;
  padding: 20px;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`