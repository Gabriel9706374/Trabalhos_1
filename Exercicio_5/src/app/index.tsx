import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Funcionario from '../components/Funcionario';
import Aluno, {AlunoType} from '../components/Aluno';
import Multiplicacao from '../components/Multiplicacao';

export default function Index() {
  const nota1 = 8;
  const nota2 = 9;
  const media = (nota1+nota2)/2;
  const valor1 = 5;
  const valor2 = 4;
  const valor3 = valor1*valor2;
  const aprovado = media>=7;
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const aluno1={nome:'João', idade: 15, turma: '91', nota1: 9, nota2: 9};
  const aluno2={nome:'Carlos', idade: 16, turma: '92', nota1: 8, nota2: 6};
  const aluno3={nome:'Pedro', idade: 13, turma: '7', nota1: 5.9, nota2: 4};
  const aluno4={nome:'Ana', idade: 13, turma: '7', nota1: 10, nota2: 6};

  const lista: AlunoType[] = [aluno1, aluno2, aluno3, aluno4];

  return (
    <View>
    <Text>Aluno: </Text>
      <FlatList 
        data={lista}
        keyExtractor={(item)=>item.nome}
        renderItem={({item})=>(<Aluno nome={item.nome} idade={item.idade} turma={item.turma} nota1={item.nota1} nota2={item.nota2}/>)}/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  corVerde: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
  corVermelho: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});