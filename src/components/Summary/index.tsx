import React, { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import Total from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./style";

export function Summary(){
    const {transactions} = useContext(TransactionsContext);

    const totalDeposits = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'depoist'){
            return acc + transaction.amount
        }
        return acc;
    }, 0);

    return(
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="Entradas" />
            </header>
            <strong>R${totalDeposits}</strong>
        </div>
        <div>
            <header>
                <p>Saidas</p>
                <img src={outcomeImg} alt="" />
            </header>
            <strong>- R$ 500,00</strong>
        </div>
        <div className="highlight-background">
            <header>
                <p>Total</p>
                <img src={Total} alt="" />
            </header>
            <strong>R$ 500,00</strong>
        </div>
    </Container>
    )
}