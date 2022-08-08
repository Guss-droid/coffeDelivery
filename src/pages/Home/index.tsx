import coffeeCupSvg from "../../assets/coffeeCup.svg"
import { SectionIcons } from "../../components/SectionIcons/Index";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { HomeContainer, IconsContainer, SectionCoffees, SectionInfos, Subtitle, TextsContainer, Title, TitleSection } from "./styles";
import { CoffeeProducts } from "../../components/CoffeeProducts";

export function Home() {
  return (
    <HomeContainer>
      <SectionInfos>
        <TextsContainer>
          <Title>
            Encontre o café perfeito para qualquer hora do dia
          </Title>

          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </Subtitle>

          <IconsContainer>
            <SectionIcons
              color="cart"
              text="Compra simples e segura"
              icon={<ShoppingCart weight="fill" />}
            />

            <SectionIcons
              color="box"
              icon={<Timer weight="fill" />}
              text="Embalagem mantém o café intacto"
            />

            <SectionIcons
              color="watch"
              icon={<Package weight="fill" />}
              text="Entrega rápida e rastreada"
            />

            <SectionIcons
              color="mug"
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </IconsContainer>
        </TextsContainer>

        <img
          src={coffeeCupSvg}
          alt="Copo de café e seus grãos"
        />
      </SectionInfos>

      <SectionCoffees>
        <TitleSection>Nossos cafés</TitleSection>

        <CoffeeProducts />        
      </SectionCoffees>
    </HomeContainer>
  )
}