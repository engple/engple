import React from "react"

import styled from "styled-components"

interface SearchIconProps {
  onClick: () => void
}

const SearchIcon: React.FC<SearchIconProps> = ({ onClick }) => {
  return (
    <StyledSearchIcon onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
    </StyledSearchIcon>
  )
}

const StyledSearchIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text);
  padding: var(--sizing-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-base);

  &:hover {
    background-color: var(--color-gray-2);
  }
`

export default SearchIcon
