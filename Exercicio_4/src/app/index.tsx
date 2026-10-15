import React, {useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Funcionario from '../components/Funcionario';
import Aluno from '../components/Aluno';
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

  return (
    <View style={styles.container}>
    <Text>Aluno: </Text>
      <Aluno nome="Gabriel" idade={19} turma="Informática" nota1={nota1} nota2={nota2} media={media}/>
    <View>
     <Button 
       title="Resultado"
       onPress={()=>setMostrarResultado(true)}/>
    </View>
    {mostrarResultado && (aprovado ?(<Text style={styles.corVerde}>Aprovado</Text>) : (<Text style={styles.corVermelho}>Reprovado</Text>))}
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