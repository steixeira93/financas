import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../Contexts/auth';
import Header from '../../Components/Header'
import HistoricoList from '../../Components/HistoricoList'

import { Background, Container, Nome, Saldo, Title, List  } from './styles'

export default function Home() {

  const [historico, setHistorico] = useState([
    {key: '1', tipo: 'receita', valor: 1200},
    {key: '2', tipo: 'despesa', valor: 300},
    {key: '3', tipo: 'receita', valor: 40},
    {key: '4', tipo: 'receita', valor: 250},
    {key: '5', tipo: 'despesa', valor: 89.72},
    {key: '6', tipo: 'despesa', valor: 35},
    {key: '7', tipo: 'despesa', valor: 89.72},
    {key: '8', tipo: 'despesa', valor: 400},
  ]);

  const {user} = useContext(AuthContext);

 return (
      <Background>
        <Header/>
        <Container>
          <Nome>Samuel</Nome>
          <Saldo>R$ 5.000,00</Saldo>
        </Container>

        <Title>Ultimas movimentações</Title>

        <List
          showsVerticalScrollIndicator={false}
          data={historico}
          keyExtractor={item => item.key}
          renderItem={ ( {item} ) => ( <HistoricoList data={item} /> )}
        />

      </Background>
  );
}