import { styled } from "@/styles"

const Button = styled('button', {
  backgroundColor: "$green500",
  borderRadius: 8,
  border: 0,
  padding: "2px 10px",
  span: {
    fontWeight: 'bold'
  },
  "&:hover": {
    filter: "brightness(0.8)"
  }
})

export default function Home() {
  return <Button><span>Teste</span>   Enviar</Button>
}
