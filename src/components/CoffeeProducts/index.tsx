import { useEffect, useState } from "react"
import { useCoffee } from "../../context/CartContext";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardCoffee } from "../CardCoffee";
import { GridCoffees } from "./styles";

export interface ICoffee {
  id: number;
  category: string[];
  name: string;
  description: string;
  priceFormatted: string;
  image: string;
  amount: number;
}

interface ICoffeeAmount {
  [key: number]: number;
}

export function CoffeeProducts() {
  const [coffees, setCoffees] = useState<ICoffee[]>([])
  const { coffee, addCart, updateCart } = useCoffee()

  const coffeeAmount = coffee.reduce((sum, product) => {
    const newSumAmount = { ...sum }
    newSumAmount[product.id] = product.amount

    return newSumAmount
  }, {} as ICoffeeAmount)

  useEffect(() => {
    async function fetchCoffees() {
      const res = await api.get("/products")

      const newCoffees = res.data.map(products => ({
        ...products,
        priceFormatted: formatPrice(products.price)
      }))

      setCoffees(newCoffees)
    }

    fetchCoffees()
  }, [])

  return (
    <GridCoffees>
      {coffees.map(item => (
        <CardCoffee
          id={item.id}
          key={item.id}
          name={item.name}
          image={item.image}
          onAddProduct={addCart}
          category={item.category}
          description={item.description}
          amount={coffeeAmount[item.id] || 0}
          priceFormatted={item.priceFormatted}
        />
      ))}
    </GridCoffees>
  )
}