import { useNavigate } from "react-router-dom";

import { CardCheckout } from "./CardCheckout";
import { useForm } from "../../context/FormContext";
import { useCoffee } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { BaseGroupInput, ButtonPayment, ButtonsContainer, ContentSections, FinishBuy, InfoContainer, InputCep, InputCity, InputComplement, InputNumber, InputsContainer, InputState, InputStreet, InputVile, Sections, SectionTitle, SubtitleAddress, TextTotalContainer, TitleSection, Total, TotalContent } from "./styles"

export interface ICardCheckout {
  id: number;
  name: string;
  image: string;
  price: string;
  amount: number;
}

export function CheckoutComp() {

  const history = useNavigate()
  const { onChange, onChoosePayment, address, payment } = useForm()
  const { coffee, clearCart, updateCart, removeCart } = useCoffee()

  const cartFormatted = coffee.map(product => ({
    ...product,
    priceFormatted: formatPrice(Number(product.price)),
    subTotal: formatPrice(Number(product.price) * product.amount)
  }))

  const total = formatPrice(coffee.reduce((sum, product) => {
    return sum + Number(product.price) * product.amount
  }, 0))

  const totalCount = formatPrice(Number(total.replace("R$", "").replace(",", ".")) + 3.50)

  function incrementCoffee(data: ICardCheckout) {
    updateCart({
      id: data.id,
      amount: data.amount + 1
    })
  }

  function decrementCoffee(data: ICardCheckout) {
    updateCart({
      id: data.id,
      amount: data.amount - 1
    })
  }

  function handleFinishBuy() {
    clearCart()

    if(!address) {
      alert("Preencha os campos")

      return
    }

    if(!payment) {
      alert("Selecione um método de pagamento")

      return
    }

    history("/success")
  }

  return (
    <>
      <Sections>
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
              id="cep"
              placeholder="CEP"
              value={address?.cep}
              onChange={e => onChange(e)}
            />

            <InputStreet
              id="street"
              placeholder="Rua"
              value={address?.street}
              onChange={e => onChange(e)}
            />

            <BaseGroupInput>
              <InputNumber
                id="number"
                placeholder="Número"
                value={address?.number}
                onChange={e => onChange(e)}
              />

              <InputComplement
                id="complemento"
                placeholder="Complemento"
                value={address?.complemento}
                onChange={e => onChange(e)}
              />
            </BaseGroupInput>

            <BaseGroupInput>
              <InputVile
                id="vile"
                placeholder="Bairro"
                value={address?.vile}
                onChange={e => onChange(e)}
              />

              <InputCity
                id="city"
                placeholder="Cidade"
                value={address?.city}
                onChange={e => onChange(e)}
              />

              <InputState
                id="uf"
                placeholder="UF"
                value={address?.uf}
                onChange={e => onChange(e)}
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

          <ButtonsContainer>
            <ButtonPayment
              onClick={() => onChoosePayment(1)}
            >
              <CreditCard weight="regular" size={18} />
              Cartão de Crédito
            </ButtonPayment>

            <ButtonPayment
              onClick={() => onChoosePayment(2)}
            >
              <Bank weight="regular" size={18} />
              Cartão de Débito
            </ButtonPayment>

            <ButtonPayment
              onClick={() => onChoosePayment(3)}
            >
              <Money weight="regular" size={18} />
              Dinheiro
            </ButtonPayment>

          </ButtonsContainer>
        </ContentSections>
      </Sections>

      <Sections>
        <TitleSection>Cafés selecionados</TitleSection>

        <ContentSections>
          {cartFormatted.map(item => (
            <CardCheckout
              id={item.id}
              key={item.id}
              coffee={item}
              name={item.name}
              price={item.subTotal}
              image={item.image}
              amount={item.amount}
              removeCoffee={removeCart}
              incrementCoffee={incrementCoffee}
              decrementCoffee={decrementCoffee}
            />
          ))}

          <TotalContent>
            <TextTotalContainer>
              <p>Total de itens</p>
              <p>{total}</p>
            </TextTotalContainer>

            <TextTotalContainer>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </TextTotalContainer>

            <TextTotalContainer>
              <Total>Total</Total>
              <Total>{totalCount}</Total>
            </TextTotalContainer>
          </TotalContent>

          <FinishBuy
            disabled={coffee.length <= 0}
            onClick={() => handleFinishBuy()}
          >
            Confirmar Pedido
          </FinishBuy>
        </ContentSections>
      </Sections>
    </>
  )
}