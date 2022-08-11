import { useNavigate } from "react-router-dom";
import { useCoffee } from "../../context/CartContext";

import logoSvg from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { ButtonGoToCart, HeaderContainer, IconsContainer, LengthCart, ShowLocal } from "./styles";

export function Header() {

  const history = useNavigate()
  const { coffee } = useCoffee()

  return (
    <HeaderContainer>
      <img
        src={logoSvg}
        alt="Copo de café e o nome da marca"
        onClick={() => history("/")}
      />

      <IconsContainer>
        <ShowLocal>
          <MapPin size={16} weight="fill" />
          <p>Jundiaí, SP</p>
        </ShowLocal>

        <ButtonGoToCart
          onClick={() => history("/checkout")}
        >
          <ShoppingCart weight="fill" size={22} />
        </ButtonGoToCart>
        <LengthCart>{coffee.length}</LengthCart>
      </IconsContainer>
    </HeaderContainer>
  )
}