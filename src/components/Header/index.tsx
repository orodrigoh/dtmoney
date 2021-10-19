import { Container, Content } from "./styles";
import logo from '../../assets/Logo.svg'


interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <button
        onClick={onOpenNewTransactionModal}
        >
        Nova transação
        </button>
      </Content>
    </Container>
  )
}
