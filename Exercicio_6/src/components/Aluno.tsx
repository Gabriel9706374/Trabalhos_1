import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export type AlunoType = {
  nome: string;
  idade: number;
  turma: string;
  nota1: number;
  nota2: number;
};

export default function Aluno(props: AlunoType) {
  const media = (props.nota1 + props.nota2) / 2;
  const aprovado = media >= 7;
  
  return (
    <View style={styles.card}>
      <Text>Nome: {props.nome}</Text>
      <Text>Idade: {props.idade} anos</Text>
      <Text>Turma: {props.turma}</Text>
      <Text>Nota 1: {props.nota1}</Text>
      <Text>Nota 2: {props.nota2}</Text>
      <Text>Média: {media}</Text>

      <Text style={aprovado ? styles.corVerde : styles.corVermelho}>
        Status: {aprovado ? 'Aprovado' : 'Reprovado'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nomeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  mediaText: {
    fontWeight: 'bold',
    marginTop: 4,
  },
  corVerde: {
    color: 'green',
    fontWeight: 'bold',
  },
  corVermelho: {
    color: 'red',
    fontWeight: 'bold',
  },
});