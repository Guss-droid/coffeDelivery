import { useEffect, useState } from "react"
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
}

export function CoffeeProducts() {
  const [coffees, setCoffees] = useState<ICoffee[]>([])

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
          key={item.id}
          category={item.category}
          description={item.description}
          id={item.id}
          image={item.image}
          name={item.name}
          priceFormatted={item.priceFormatted}
        />
      ))}
    </GridCoffees>
  )
}