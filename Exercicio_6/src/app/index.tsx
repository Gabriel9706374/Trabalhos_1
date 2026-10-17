import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Selecione um exercício</Text>
      <View style={styles.botao}>
        <Button title="Exercício 1" onPress={() => router.push('/index1')} />
      </View>
      <View style={styles.botao}>
        <Button title="Exercício 2" onPress={() => router.push('/index2')} />
      </View>
      <View style={styles.botao}>
        <Button title="Exercício 3" onPress={() => router.push('/index3')} />
      </View>
      <View style={styles.botao}>
        <Button title="Exercício 4" onPress={() => router.push('/index4')} />
      </View>
      <View style={styles.botao}>
        <Button title="Exercício 5" onPress={() => router.push('/index5')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  botao: {
    marginVertical: 8,
  },
});
