import entradas from "../../assets/Entradas.svg"
import saidas from "../../assets/Saidas.svg"
import total from "../../assets/Total.svg"


import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradas} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidas} alt="Saidas" />
        </header>
        <strong>-R$200,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$800,00</strong>
      </div>
    </Container>
  )
}