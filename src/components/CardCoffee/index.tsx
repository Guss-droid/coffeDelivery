import { ShoppingCart } from "phosphor-react";
import { ICoffee } from "../CoffeeProducts";
import { ButtonBuy, ButtonsContainer, BuyContent, CardContainer, CategoryWords, CoffeeDescription, ContainerWords, ContentCoffee, NameCoffee, PriceContent } from "./styles";

interface ICardCoffee extends ICoffee {
  onAddProduct: (id: number) => void;
}

export function CardCoffee({
  id,
  name,
  image,
  amount,
  category,
  description,
  onAddProduct,
  priceFormatted,
}: ICardCoffee) {
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
          <ButtonBuy onClick={() => onAddProduct(id)}>
            <ShoppingCart weight="fill" size={18} />
            {amount}
          </ButtonBuy>
        </ButtonsContainer>
      </BuyContent>
    </CardContainer>
  )
}