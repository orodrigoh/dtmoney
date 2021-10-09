import { Container, Content } from "./styles";
import logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <button>Nova transação</button>
      </Content>
    </Container>
  )
}
