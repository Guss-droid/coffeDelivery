import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SectionInfos = styled.div`
  display: flex;
  margin: 6rem 10rem 0;
  gap: 3.5rem;
  align-items: center;
`

export const TextsContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.p`
  font-family: "Baloo 2";
  font-weight: 800;
  font-size: 48px;
  line-height: 1.3;
  align-self: stretch;
  max-width: 588px;
`

export const Subtitle = styled.p`
  font-size: 20px;
  line-height: 1.3;
  align-self: stretch;
  max-width: 588px;
  margin-top: 1rem;
`

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  margin: 4rem 0 0;
`

export const SectionCoffees = styled.div`
  display: flex;
  margin: 6.25rem 0;
  flex-direction: column;
`

export const TitleSection = styled.p`
  font-family: "Baloo 2";
  font-size: 32px;
  font-weight: 800;
  line-height: 1.3;
`