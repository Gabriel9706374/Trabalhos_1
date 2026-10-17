
import { View, Text, StyleSheet } from 'react-native';

export default function ExemploStyle_View3() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>BEMVINDO</Text>
        <Text>FULANO</Text>
      </View>

      <View style={styles.meio}>
        <Text style={styles.botao}>COMPRAR</Text>
      </View>

      <View style={styles.final}>
        <Text style={styles.botao}>SAIR</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  cabecalho: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
  },
  meio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  final: {
    alignItems: 'flex-start',
  },
  botao: {
    borderWidth: 1,
    padding: 8,
  },
});

