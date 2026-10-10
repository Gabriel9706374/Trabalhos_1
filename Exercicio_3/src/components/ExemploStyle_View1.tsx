import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

export default function ExemploStyle_View() {
  function selecionarTela(numero: number) {
    Alert.alert("Tela selecionada", "Você selecionou a tela " + numero);
  }

  return (
    <View style={styles.container}>
      <View style={styles.parte_superior}>
        <View style={styles.botoes}>
          <Pressable style={styles.botao} onPress={() => selecionarTela(1)}>
            <Text style={styles.texto_botao}>1</Text>
          </Pressable>

          <Pressable style={styles.botao} onPress={() => selecionarTela(2)}>
            <Text style={styles.texto_botao}>2</Text>
          </Pressable>

          <Pressable style={styles.botao} onPress={() => selecionarTela(3)}>
            <Text style={styles.texto_botao}>3</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.parte_inferior}>
        <Text style={styles.hello}>HELLO{"\n"}WORLD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
    overflow: "hidden",
  },
  parte_superior: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  botoes: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 6,
    padding: 10,
  },
  botao: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  texto_botao: {
    fontSize: 14,
    color: "black",
  },
  parte_inferior: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  hello: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
  },
});
