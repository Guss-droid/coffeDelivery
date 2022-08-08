import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ICoffee } from "../CoffeeProducts";
import { BaseButton, ButtonBuy, ButtonsContainer, BuyContent, CardContainer, CategoryWords, CoffeeDescription, ContainerWords, ContentCoffee, LessOrMoreContent, NameCoffee, PriceContent } from "./styles";

export function CardCoffee({
  category,
  description,
  id,
  image,
  name,
  priceFormatted,
}: ICoffee) {
  return (
    <CardContainer>
      <img
        src={image}
        alt={description}
      />

      <ContainerWords>
        {category.map(item => (
          <CategoryWords>
            <p>
              {item}
            </p>
          </CategoryWords>
        ))}
      </ContainerWords>

      <ContentCoffee>
        <NameCoffee>{name}</NameCoffee>

        <CoffeeDescription>
          {description}
        </CoffeeDescription>
      </ContentCoffee>

      <BuyContent>
        <PriceContent
          dangerouslySetInnerHTML={{ __html: priceFormatted.replace("R$", `<span>R$</span>`) }}
        />

        <ButtonsContainer>
          <LessOrMoreContent>
            <BaseButton>
              <Minus weight="bold" />
            </BaseButton>
            
            1

            <BaseButton>
              <Plus weight="bold" />
            </BaseButton>
          </LessOrMoreContent>

          <ButtonBuy>
            <ShoppingCart weight="fill" size={18} />
          </ButtonBuy>
        </ButtonsContainer>
      </BuyContent>
    </CardContainer>
  )
}