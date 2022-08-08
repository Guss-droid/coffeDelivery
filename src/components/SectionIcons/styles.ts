import styled from "styled-components";

const backgroundBox = {
  cart: "yellow-900",
  box: "base-text",
  watch: "yellow-500",
  mug: "purple-500",
}

interface IBoxColorsData {
  boxColor: keyof typeof backgroundBox
}

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 2.5rem 1.25rem 0;
`

export const BoxIcon = styled.div<IBoxColorsData>`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border-radius: 9999px;
  justify-content: center;
  color: ${props => props.theme["background"]};
  background: ${props => props.theme[backgroundBox[props.boxColor]]};

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`