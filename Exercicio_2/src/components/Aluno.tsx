import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

type Props = {
};

export default function Aluno(props: Props) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [turma, setTurma] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  function mostrarDados() {
    const media = (Number(nota1) + Number(nota2)) / 2;

    Alert.alert(
      'Dados do aluno',
      'Nome: ' + nome +
      '\nIdade: ' + idade +
      '\nTurma: ' + turma +
      '\nNota 1: ' + nota1 +
      '\nNota 2: ' + nota2 +
      '\nMédia: ' + media
    );
  }

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />
      <Text>Idade:</Text>
      <TextInput
        value={idade}
        onChangeText={setIdade}
        placeholder="Digite a idade"
        keyboardType="numeric"
      />
      <Text>Turma:</Text>
      <TextInput
        value={turma}
        onChangeText={setTurma}
        placeholder="Digite a turma"
      />
      <Text>Nota 1:</Text>
      <TextInput
        value={nota1}
        onChangeText={setNota1}
        placeholder="Digite a nota 1"
        keyboardType="numeric"
      />
      <Text>Nota 2:</Text>
      <TextInput
        value={nota2}
        onChangeText={setNota2}
        placeholder="Digite a nota 2"
        keyboardType="numeric"
      />
      <Button
        title="Mostrar dados"
        onPress={mostrarDados}
      />
    </View>
  );
}