import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../Contexts/auth';

export default function Home() {

  const {user, signOut} = useContext(AuthContext);
 return (
   <View>
       <Text>{user && user.email}</Text>
       <Text>{user && user.nome}</Text>
       <Button
        title="Sair da Conta"
        onPress={ () => signOut() }
       />
   </View>
  );
}