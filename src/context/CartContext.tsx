import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { api } from "../services/api";
import { formatPrice } from "../utils/formatPrice";

interface ICoffeeCart {
  id: number;
  image: string;
  name: string;
  price: string;
  amount: number;
}

interface IUpdateCart {
  id: number;
  amount: number;
}

interface ICoffeeContextData {
  coffee: ICoffeeCart[];
  clearCart: () => void;
  removeCart: (id: number) => void;
  addCart: (id: number) => Promise<void>;
  updateCart: ({id, amount}: IUpdateCart) => void;
}

interface ICoffeeProvider {
  children: ReactNode;
}

const CoffeeContext = createContext({} as ICoffeeContextData)

export function CoffeeProvider({ children }: ICoffeeProvider) {

  const [coffee, setCoffee] = useState<ICoffeeCart[]>(() => {
    const cartStoraged = localStorage.getItem("cart")

    if (cartStoraged) return JSON.parse(cartStoraged)

    return []
  })

  const prevCoffeeRef = useRef<ICoffeeCart[]>([])
  const coffeePreviousValue = prevCoffeeRef.current ?? coffee

  useEffect(() => {
    prevCoffeeRef.current = coffee
  }, [])

  useEffect(() => {
    if(coffeePreviousValue !== coffee) {
      localStorage.setItem("cart", JSON.stringify(coffee))
    }
  }, [coffee, coffeePreviousValue])

  function clearCart() {
    setCoffee([])
  }

  async function addCart(id: number) {
    try {
      const updateCoffee = [...coffee]
      const coffeeExists = updateCoffee.find(coffeeId => coffeeId.id === id)

      const currentAmount = coffeeExists ? coffeeExists.amount : 0
      const amount = currentAmount + 1

      if (coffeeExists) {
        coffeeExists.amount = amount

      } else {
        const product = await api.get(`/products/${id}`)

        const newProduct = {
          ...product.data,
          amount: 1,
          priceFormatted: formatPrice(product.data.price)
        }

        updateCoffee.push(newProduct)
      }

      setCoffee(updateCoffee)
    } catch {}
  }

  function updateCart({id, amount}: IUpdateCart) {
    try {
      if(amount <= 0) return 

      const updateCoffee = [...coffee]
      const productExists = updateCoffee.find(idCoffee => idCoffee.id === id)

      if(productExists) {
        productExists.amount = amount

        setCoffee(updateCoffee)
      } else {
        throw Error()
      }
    } catch {}
  }

  function removeCart(id: number) {
    const updateCoffee = [...coffee]
    const productIndex = updateCoffee.findIndex(idCoffee => idCoffee.id === id)

    if(productIndex >= 0) {
      updateCoffee.splice(productIndex, 1)

      setCoffee(updateCoffee)
    } else {
      throw Error()
    }
  }

  return (
    <CoffeeContext.Provider value={{ coffee, clearCart, addCart, updateCart, removeCart }}>
      {children}
    </CoffeeContext.Provider>
  )
}

export const useCoffee = () => useContext(CoffeeContext)