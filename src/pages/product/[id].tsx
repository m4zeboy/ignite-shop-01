import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,99</span>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit saepe debitis magnam quidem nostrum, voluptates amet quo quas, optio libero repellat sunt voluptatum ipsum natus dolorum totam dignissimos accusantium iure.</p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}