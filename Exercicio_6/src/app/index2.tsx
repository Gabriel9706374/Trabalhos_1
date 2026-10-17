import { Text, View } from 'react-native';
import Funcionario2 from '../components/Funcionario2';
import NomeSobrenome from '../components/Sobrenome';
import Aluno2 from '../components/Aluno2';
import Multiplicacao2 from '../components/Multiplicacao2';

export default function Index() {
  return (
    <View>
      <Text>Funcionário:</Text>
      <Funcionario2 nome="Carlos" idade={25} setor="Informática" />
      <Text>Nome e Sobrenome:</Text>
      <NomeSobrenome />
      <Text>Aluno:</Text>
      <Aluno2 />
      <Text>Multiplicação:</Text>
      <Multiplicacao2 />
    </View>
  );
}
