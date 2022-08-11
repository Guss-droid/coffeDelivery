import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 16rem;
  height: 19.375rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px 36px;
  background: ${props => props.theme["base-card"]};

  img {
    margin-top: -3.2rem;
  }
`

export const CategoryWords = styled.div`
  padding: 6px;
  margin-top: 1rem;
  border-radius: 100px;
  color: ${props => props.theme["yellow-900"]};
  background: ${props => props.theme["yellow-100"]};
  
  p {
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const ContentCoffee = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

export const NameCoffee = styled.p`
  font-size: 1.25rem;
  font-family: "Baloo 2";
  font-weight: 700;
  line-height: 1.3;
  margin-top: 1rem;
`

export const CoffeeDescription = styled.p`
  font-size: 0.8rem;
  line-height: 1.3;
  margin-top: 0.5rem;
  text-align: center;
  color: ${props => props.theme["base-label"]};
`

export const ContainerWords = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

export const PriceContent = styled.div`
  font-family: "Baloo 2";
  font-weight: 800;
  font-size: 24px;

  span {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 14px
  }
`

export const BuyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.4rem;
`

export const ButtonBuy = styled.button`
  background: ${props => props.theme["purple-900"]};
  color: ${props => props.theme["base-card"]};
  border: 0;
  border-radius: 6px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.6s;
  height: 2.375rem;
  width: 3rem;
  gap: 4px;

  :hover {
    background: ${props => props.theme["purple-500"]}
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 0 0 0 1.5rem;
`