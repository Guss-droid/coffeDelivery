import { useNavigate } from "react-router-dom";

import logoSvg from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { ButtonGoToCart, HeaderContainer, IconsContainer, ShowLocal } from "./styles";

export function Header() {

  const history = useNavigate()

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
      </IconsContainer>
    </HeaderContainer>
  )
}