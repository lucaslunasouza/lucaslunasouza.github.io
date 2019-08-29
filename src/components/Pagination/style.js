import styled from 'styled-components'
import theme from '../../shared/styles/theme'

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
`

export const ChangePageButton = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PageNumber = styled.div`
  border-bottom: ${props => props.isSelected ? `2px solid ${theme.colors.text.default}` : ''};
  font-weight: ${props => props.isSelected ? '400' : '300'};
  padding: 5px;
  margin: 5px 10px;
  cursor: pointer;
  font-size: ${theme.fonts.sizes.section};
`

export const PagesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 20px;
`

export const EndOfPages = styled.div`
  display: block;
  margin: 0 13px;
`