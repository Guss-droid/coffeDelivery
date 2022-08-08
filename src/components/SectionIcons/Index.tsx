import { ReactNode } from "react"
import { BoxIcon, SectionContainer } from "./styles";

interface SectionIconsData {
  icon: ReactNode;
  text: string;
  color: "mug" | "cart" | "watch" | "box";
}

export function SectionIcons({ icon, text, color }: SectionIconsData) {
  return (
    <SectionContainer>
      <BoxIcon boxColor={color}>
        {icon}
      </BoxIcon>

      <p>{text}</p>
    </SectionContainer>
  )
}