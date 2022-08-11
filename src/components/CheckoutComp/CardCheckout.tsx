import { Minus, Plus, Trash } from "phosphor-react";
import { ICardCheckout } from ".";
import { BaseButton, CardContainer, ContentButtons, ContentCheckoutSections, ContentTexts, LessOrMoreContent, PriceText, RemoveButton } from "./styles";

interface ICardData extends ICardCheckout {
  coffee: ICardCheckout;
  removeCoffee: (id: number) => void;
  incrementCoffee: (coffee: ICardCheckout) => void;
  decrementCoffee: (coffee: ICardCheckout) => void;
}

export function CardCheckout({
  id,
  image,
  name,
  price,
  coffee,
  amount,
  removeCoffee,
  incrementCoffee,
  decrementCoffee,
}: ICardData) {
  return (
    <CardContainer>
      <img
        src={image}
        alt="Cafés selecionados"
      />

      <ContentCheckoutSections>
        <ContentTexts>
          <p>{name}</p>

          <PriceText>{price}</PriceText>
        </ContentTexts>

        <ContentButtons>
          <LessOrMoreContent>
            <BaseButton
              onClick={() => decrementCoffee(coffee)}
              disabled={amount === 1}
            >
              <Minus weight="bold" />
            </BaseButton>

            {amount}

            <BaseButton
              onClick={() => incrementCoffee(coffee)}
            >
              <Plus weight="bold" />
            </BaseButton>
          </LessOrMoreContent>

          <RemoveButton onClick={() => removeCoffee(id)}>
            <Trash size={18} />
            Remover
          </RemoveButton>
        </ContentButtons>
      </ContentCheckoutSections>
    </CardContainer>
  )
}