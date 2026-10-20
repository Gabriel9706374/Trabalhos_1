
import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atacadão</Text>

      <View style={styles.botao}>
        <Button
          title="Ver Produtos"
          onPress={() => router.push('/produtos')}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Ver Promoções"
          onPress={() => router.push('/promocoes')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#228B22',
  },
  botao: {
    width: 220,
    margin: 10,
  },
});
