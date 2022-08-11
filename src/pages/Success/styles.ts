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

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem 0;
`

export const Subtitle = styled.p`
  font-size: 20px;
  color: ${props => props.theme["base-subtitle"]};
`

export const SuccessText = styled.p`
  font-family: "Baloo 2";
  font-weight: 800;
  color: ${props => props.theme["yellow-900"]};
  font-size: 32px;
`

export const ContentInfosAndImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin: 2.5rem 0 0;
  width: 80%;
`

export const ContainerInfos = styled.div`
  background: linear-gradient(to right, #DBAC2C, #C47F17, #8047F8, #4B2995);
  position: relative;
  padding: 2px;
  border-radius: 6px 36px;
`

export const ModuleInfo = styled.div`
  background: #FFF;
  padding: 2.5rem 5rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`

export const TextContent = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`

export const IconBox = styled.div<IBoxColorsData>`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border-radius: 9999px;
  justify-content: center;
  color: ${props => props.theme["background"]};
  background: ${props => props.theme[backgroundBox[props.boxColor]]};
`

export const BoldText = styled.p`
  font-weight: 700;
`