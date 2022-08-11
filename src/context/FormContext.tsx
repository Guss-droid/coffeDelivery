import { ChangeEvent, createContext, ReactNode, useContext, useState } from "react";

interface IFormProvider {
  children: ReactNode;
}

interface IAddressData {
  street?: string;
  number?: number;
  city?: string;
  vile?: string;
  uf?: string;
  cep?: string;
  complemento?: string;
}

interface IFormContextData {
  address?: IAddressData;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  payment: string;
  onChoosePayment: (id: number) => void;
}

const FormContext = createContext({} as IFormContextData)

export function FormProvider({ children }: IFormProvider) {

  const [payment, setPayment] = useState("")
  const [address, setAddress] = useState<IAddressData>()

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const newAddress = { ...address }

    newAddress[e.target.id] = e.target.value

    setAddress(newAddress)
  }

  function onChoosePayment(id: number) {
    if (id === 1) {
      setPayment("Cartão de Crédito")
    } else if (id === 2) {
      setPayment("Cartão de Débito")
    } else {
      setPayment("Dinheiro")
    }
  }

  return (
    <FormContext.Provider value={{ address, onChange, payment, onChoosePayment }}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => useContext(FormContext)