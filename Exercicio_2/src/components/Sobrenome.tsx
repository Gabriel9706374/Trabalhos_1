import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

type Props = {
};

export default function NomeSobrenome(props: Props) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  function mostrarDados() {
    Alert.alert(
      'Dados',
      'Nome: ' + nome + '\nSobrenome: ' + sobrenome
    );
  }

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />
      <Text>Sobrenome:</Text>
      <TextInput
        value={sobrenome}
        onChangeText={setSobrenome}
        placeholder="Digite seu sobrenome"
      />
      <Button
        title="Mostrar"
        onPress={mostrarDados}
      />
    </View>
  );
}