import { CurrencyDollar, MapPinLine } from "phosphor-react"
import { BaseGroupInput, CheckoutContainer, ContentSections, InfoContainer, InputCep, InputCity, InputComplement, InputNumber, InputsContainer, InputState, InputStreet, InputVile, SectionAddress, SectionTitle, SubtitleAddress, TitleSection } from "./styles"

export function Checkout() {
  return (
    <CheckoutContainer>
      <SectionAddress>
        <TitleSection>Complete seu pedido</TitleSection>

        <ContentSections>
          <InfoContainer boxColor="map">
            <MapPinLine weight="regular" size={22} />
            <span>
              <SectionTitle>Endereço de entrega</SectionTitle>

              <SubtitleAddress>
                Informe o endereço onde deseja receber seu pedido
              </SubtitleAddress>
            </span>
          </InfoContainer>

          <InputsContainer>
            <InputCep
              placeholder="CEP"
            />

            <InputStreet
              placeholder="Rua"
            />

            <BaseGroupInput>
              <InputNumber
                placeholder="Número"
              />

              <InputComplement
                placeholder="Complemento"
              />
            </BaseGroupInput>

            <BaseGroupInput>
              <InputVile
                placeholder="Bairro"
              />

              <InputCity
                placeholder="Cidade"
              />

              <InputState
                placeholder="UF"
              />
            </BaseGroupInput>

          </InputsContainer>
        </ContentSections>

        <ContentSections>
          <InfoContainer boxColor="money">
            <CurrencyDollar weight="regular" size={22} />
            <span>
              <SectionTitle>Pagamento</SectionTitle>

              <SubtitleAddress>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </SubtitleAddress>
            </span>
          </InfoContainer>
        </ContentSections>
      </SectionAddress>

      <div></div>
    </CheckoutContainer>
  )
}