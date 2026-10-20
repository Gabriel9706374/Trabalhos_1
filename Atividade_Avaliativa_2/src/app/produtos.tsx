import { Link } from 'expo-router';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Produtos() {
  const produtos = [
    { id: '1', nome: 'Arroz', preco: 25.90, unidade: '5 kg' },
    { id: '2', nome: 'Feijão', preco: 8.50, unidade: '1 kg' },
    { id: '3', nome: 'Açúcar', preco: 4.99, unidade: '1 kg' },
    { id: '4', nome: 'Farinha de trigo', preco: 5.49, unidade: '1 kg' },
    { id: '5', nome: 'Óleo de soja', preco: 7.99, unidade: '900 ml' },
    { id: '6', nome: 'Leite', preco: 4.79, unidade: '1 litro' },
    { id: '7', nome: 'Café', preco: 16.90, unidade: '500 g' },
    { id: '8', nome: 'Macarrão', preco: 3.99, unidade: '500 g' },
    { id: '9', nome: 'Sal', preco: 2.49, unidade: '1 kg' },
    { id: '10', nome: 'Biscoito', preco: 3.50, unidade: 'pacote' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Produtos</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Preço: R$ {item.preco.toFixed(2)}</Text>
            <Text>Unidade: {item.unidade}</Text>
          </View>
        )}
      />

      <Link href="/" style={styles.voltar}>
        Voltar ao menu
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#228B22',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  voltar: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    padding: 15,
  },
});
