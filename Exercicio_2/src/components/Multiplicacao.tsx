import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

type Props = {
};

export default function Multiplicacao(props: Props) {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');

  function mostrarResultado() {
    const resultado =
      Number(valor1) *
      Number(valor2) *
      Number(valor3);

    Alert.alert(
      'Multiplicação',
      'Valor 1: ' + valor1 +
      '\nValor 2: ' + valor2 +
      '\nValor 3: ' + valor3 +
      '\nResultado: ' + resultado
    );
  }

  return (
    <View>
      <Text>Valor 1:</Text>
      <TextInput
        value={valor1}
        onChangeText={setValor1}
        placeholder="Digite o valor 1"
        keyboardType="numeric"
      />
      <Text>Valor 2:</Text>
      <TextInput
        value={valor2}
        onChangeText={setValor2}
        placeholder="Digite o valor 2"
        keyboardType="numeric"
      />
      <Text>Valor 3:</Text>
      <TextInput
        value={valor3}
        onChangeText={setValor3}
        placeholder="Digite o valor 3"
        keyboardType="numeric"
      />
      <Button
        title="Multiplicar"
        onPress={mostrarResultado}
      />
    </View>
  );
}