import { HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react'


import camiseta1 from '../assets/shirt1.png';
import camiseta2 from '../assets/shirt2.png';
import camiseta3 from '../assets/shirt3.png';

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 2,
      spacing: 48
    }
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 100,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta XI</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta XI</strong>
          <span>R$ 198,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta XI</strong>
          <span>R$ 198,90</span>
        </footer>
      </Product>
    </HomeContainer>
  ) 
}
