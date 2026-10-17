import { Text, View } from 'react-native';
import Funcionario1 from '../components/Funcionario1';
import Aluno1 from '../components/Aluno1';
import Multiplicacao1 from '../components/Multiplicacao1';

export default function Index() {
  const nota1 = 8;
  const nota2 = 9;
  const media = (nota1 + nota2) / 2;
  const valor1 = 5;
  const valor2 = 4;
  const valor3 = valor1 * valor2;

  return (
    <View>
      <Text>Funcionário:</Text>
      <Funcionario1 nome="Carlos" idade={25} setor="Informática" />
      <Text>Aluno:</Text>
      <Aluno1 nome="Gabriel" idade={19} turma="Informática" nota1={nota1} nota2={nota2} />
      <Text>Multiplicação:</Text>
      <Multiplicacao1 valor1={valor1} valor2={valor2} valor3={valor3} />
    </View>
  );
}
