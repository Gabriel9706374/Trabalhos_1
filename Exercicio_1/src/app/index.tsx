import { Text, View } from 'react-native';
import Funcionario from '../components/Funcionario';
import Aluno from '../components/Aluno';
import Multiplicacao from '../components/Multiplicacao';

export default fuction Index() {
  const valor1 = 5;
  const valor2 = 4;
  const valor3 = valor1*valor2;


  return (
    <View>
    <Text>Funcionário: </Text>
      <Funcionario nome="Carlos" idade={25} setor="Informática" />
    <Text>Aluno: </Text>
      <Aluno nome="Gabriel" idade={19} turma="Informática" nota1={8} nota={9} media={media}/>
    <Text>Multiplicação: </Text>
      <Multiplicacao valor1={valor1} valor2={valor2} valor3={valor3} />
  );
}