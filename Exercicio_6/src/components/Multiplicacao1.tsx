import { View, Text } from 'react-native';

type Props = {
  valor1: number;
  valor2: number;
  valor3: number;
};

export default function Multiplicacao1(props: Props) {
  return (
    <View>
      <Text>Valor 1: {props.valor1}</Text>
      <Text>Valor 2: {props.valor2}</Text>
      <Text>Resultado: {props.valor3}</Text>
    </View>
  );
}
