import { View, Text, StyleSheet } from 'react-native';

export default function ExemploStyle_View2() {
  return (
    <View style={styles.container}>
      <View style={styles.parte_superior}>
        <Text style={styles.texto}>PRIMEIRO</Text>
        <Text style={styles.texto}>SEGUNDO</Text>
        <Text style={styles.texto}>TERCEIRO</Text>
      </View>

      <View style={styles.parte_inferior}>
        <View style={styles.botoes}>
          <Text style={styles.botao}>1</Text>
          <Text style={styles.botao}>2</Text>
          <Text style={styles.botao}>3</Text>
        </View>
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
  },
  parte_superior: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
  },
  texto: {
    fontSize: 18,
  },
  parte_inferior: {
    flex: 1,
  },
  botoes: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    gap: 8,
    padding: 10,
  },
  botao: {
    borderWidth: 1,
    padding: 5,
  },
});

