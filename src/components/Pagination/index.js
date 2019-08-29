import React from 'react'
import {
  PaginationContainer,
  PageNumber,
  ChangePageButton,
  PagesContainer,
  EndOfPages
} from './style'
import {
  faCaretLeft,
  faCaretRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pagination = (props) => {
  const getChangeButton = (icon, change) => {
    if (props.currentPage + change > 0
      && props.currentPage + change <= props.numPages) {

      return (
        <ChangePageButton
          onClick={() => props.changePage(props.currentPage + change)}
        >
          <FontAwesomeIcon icon={icon} />
        </ChangePageButton>
      )
    } else {
      return <EndOfPages />
    }
  }

  const getPages = () => {
    return [...Array(props.numPages).keys()].map(num => {
      const page = num + 1
      return (
        <PageNumber
          key={page}
          onClick={() => props.changePage(page)}
          isSelected={props.currentPage === page}
        >
          {page}
        </PageNumber>
      )
    })
  }

  return (
    <PaginationContainer>
      {getChangeButton(faCaretLeft, -1)}
      <PagesContainer>
        {getPages()}
      </PagesContainer>
      {getChangeButton(faCaretRight, 1)}
    </PaginationContainer>
  )
}

export default Pagination