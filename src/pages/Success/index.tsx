import { BoldText, ContainerInfos, ContentInfosAndImage, IconBox, ModuleInfo, Subtitle, SuccessContainer, SuccessText, TextContent } from "./styles";

import { useForm } from "../../context/FormContext";
import manInCarSvg from "../../assets/manInCar.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {

  const { payment, address } = useForm()

  return (
    <SuccessContainer>
      <SuccessText>Uhu! Pedido confirmado</SuccessText>
      <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>

      <ContentInfosAndImage>
        <ContainerInfos>
          <ModuleInfo>
            <TextContent>
              <IconBox boxColor="mug">
                <MapPin weight="fill" size={18} />
              </IconBox>

              <div>
                <p>Entrega em <strong>{address?.street}, {address?.number}</strong></p>
                <p>{address?.vile} - {address?.city}, {address?.uf}</p>
              </div>
            </TextContent>

            <TextContent>
              <IconBox boxColor="watch">
                <Timer weight="fill" />
              </IconBox>

              <div>
                <p>Previsão de entrega</p>
                <BoldText>20 min - 30 min</BoldText>
              </div>
            </TextContent>

            <TextContent>
              <IconBox boxColor="cart">
                <CurrencyDollar weight="regular" size={18} />
              </IconBox>

              <div>
                <p>Pagamento na entrega</p>
                <BoldText>{payment}</BoldText>
              </div>
            </TextContent>
          </ModuleInfo>
        </ContainerInfos>

        <img
          src={manInCarSvg}
          alt="Homem de moto indo entregar"
        />
      </ContentInfosAndImage>
    </SuccessContainer>
  )
}