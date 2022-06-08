import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../Contexts/auth';
import Header from '../../Components/Header'

import { Background, Container, Nome, Saldo, Title  } from './styles'

export default function Home() {

  const {user} = useContext(AuthContext);

 return (
      <Background>
        <Header/>
        <Container>
          <Nome>Samuel</Nome>
          <Saldo>R$ 5.000,00</Saldo>
        </Container>

        <Title>Ultimas movimentações</Title>

      </Background>
  );
}