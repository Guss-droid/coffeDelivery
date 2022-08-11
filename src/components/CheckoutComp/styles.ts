import styled from "styled-components";

const svgColor = {
  map: "yellow-900",
  money: "purple-900",
}

interface IBoxColorsData {
  boxColor: keyof typeof svgColor
}

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentSections = styled.div`
  background: ${props => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
  margin: 1rem 2rem 0 0;
  border-radius: 6px 44px;
  min-width: 28rem;
`

export const TitleSection = styled.p`
  font-family: "Baloo 2";
  font-weight: 700;
  line-height: 1.3;
  font-size: 1.2rem;
`

export const InfoContainer = styled.div<IBoxColorsData>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;

  svg {
    color: ${props => props.theme[svgColor[props.boxColor]]}
  }
`

export const SubtitleAddress = styled.p`
  font-size: 14px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`

const BaseInput = styled.input`
  background: ${props => props.theme["base-input"]};
  padding: 12px;
  height: 2.6rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme["base-button"]};
  color: ${props => props.theme["base-label"]};

  &:focus {
    outline: 1px solid ${props => props.theme["yellow-900"]};
  }

  &:hover {
    background: ${props => props.theme["base-hover"]};
  }
`

export const InputCep = styled(BaseInput)`
  display: block;
  width: 12.5rem;
  margin-top: 2rem;
`

export const InputStreet = styled(BaseInput)`
  display: block;
  width: 100%;
`

export const InputNumber = styled(BaseInput)`
  display: flex;
  width: 12.5rem;
`

export const InputComplement = styled(BaseInput)`
  display: flex;
  width: 100%;
`

export const InputVile = styled(BaseInput)`
  display: flex;
  width: 12.5rem;
`

export const InputCity = styled(BaseInput)`
  display: flex;
  width: 17.25rem;
`

export const InputState = styled(BaseInput)`
  display: flex;
  width: 3.5rem;
`

export const BaseGroupInput = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const SectionTitle = styled.p`
  color: ${props => props.theme["base-subtitle"]};
  font-weight: 500;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 2rem 0 0;
  align-items: center;
`

export const ButtonPayment = styled.button`
  width: 11rem;
  height: 3rem;
  background: ${props => props.theme["base-button"]};
  border: 0;
  border-radius: 6px;
  font-size: 12px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme["base-hover"]};
  }

  &:focus {
    border: 1px solid ${props => props.theme["purple-500"]}
  }

  svg {
    color: ${props => props.theme["purple-500"]}
  }
`

export const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 26rem;
  min-height: 8.5rem;
  border-bottom: 1px solid ${props => props.theme["base-button"]};
`

export const ContentTexts = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  p {
    color: ${props => props.theme["base-subtitle"]};
  }
`

export const ContentButtons = styled.div`
  display: flex;
  gap: 1rem;
  height: 2.375rem;
`

export const ContentCheckoutSections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`

export const PriceText = styled.p`
  font-weight: 700;
`

export const LessOrMoreContent = styled.span`
  background: ${props => props.theme["base-button"]};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 2.375rem;
  padding: 0 8px;
`

export const BaseButton = styled.button`
  background: transparent;
  color: ${props => props.theme["purple-500"]};
  margin: 0;
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
  transition: 0.6s;
  cursor: pointer;

  &:not(:disabled):hover {
    color: ${props => props.theme["purple-900"]}
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export const RemoveButton = styled.button `
  background: ${props => props.theme["base-button"]};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 2.375rem;
  padding: 0 8px;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;

  svg {
    color: ${props => props.theme["purple-500"]};
  }

  &:hover {
    background: ${props => props.theme["base-hover"]};
  }
`

export const TotalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1.5rem 0;
  gap: 8px;
`

export const TextTotalContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Total = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${props => props.theme["base-subtitle"]};
`

export const FinishBuy = styled.button`
  width: 100%;
  background-color: ${props => props.theme["yellow-500"]};
  border: 0;
  padding: 0.75rem 0;
  border-radius: 6px;
  color: ${props => props.theme["white"]};
  text-transform: uppercase;
  font-size: 14px;
  height: 2.85rem;
  cursor: pointer;
  transition: 0.4s;

  &:not(:disabled):hover {
    background-color: ${props => props.theme["yellow-900"]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`