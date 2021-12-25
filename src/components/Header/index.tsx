import logoImg from '../../assets/logo.svg'

import { Container, Content } from './style'

type HeaderProps = {
    onOpenNewTransactionModal: () => void; // retorno dessa função e vazio
}

export function Header({ onOpenNewTransactionModal }: HeaderProps){

    return(
        <Container>
            <Content>
            <img src={logoImg} alt="logo" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
            </button>

            </Content>
        </Container>
    )
}