import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  img {
    height: 2.5rem;
    width: 5.25rem;
    cursor: pointer;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export const ShowLocal = styled.span`
  display: flex;
  padding: 8px;
  background: ${props => props.theme["purple-100"]};
  font-size: 14px;
  border-radius: 6px;
  height: 2.4rem;
  align-items: center;
  
  p {
    color: ${props => props.theme["purple-900"]};
    margin-left: 4px;
  }

  svg {
    color: ${props => props.theme["purple-500"]}
  }
`

export const ButtonGoToCart = styled.button`
  border: 0;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s ;
  color: ${props => props.theme["yellow-900"]};
  background: ${props => props.theme["yellow-100"]};

  :hover {
    opacity: 0.7
  }
`