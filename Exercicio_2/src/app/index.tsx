import { Text, View } from 'react-native';
import Funcionario from '../components/Funcionario';
import NomeSobrenome from '../components/NomeSobrenome';
import Aluno from '../components/Aluno';
import Multiplicacao from '../components/Multiplicacao';

export default function Index() {
  return (
    <View>
      <Text>Funcionário: </Text>
      <Funcionario
        nome="Carlos"
        idade={25}
        setor="Informática"
      />
      <Text>Nome e Sobrenome:</Text>
      <NomeSobrenome />
      <Text>Aluno: </Text>
      <Aluno />
      <Text>Multiplicação: </Text>
      <Multiplicacao />
    </View>
  );
}