import { Link } from 'expo-router';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Promocoes() {
  const promocoes = [
    {
      id: '1',
      nome: 'Arroz',
      tipo: 'Leve 5 kg e pague 4 kg',
      preco: 19.90,
      foto: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
    },
    {
      id: '2',
      nome: 'Leite',
      tipo: 'Leve 3 e pague 2',
      preco: 8.99,
      foto: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400',
    },
    {
      id: '3',
      nome: 'Café',
      tipo: 'Desconto no cartão da loja',
      preco: 12.90,
      foto: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    },
    {
      id: '4',
      nome: 'Maçã',
      tipo: 'Leve 3 e pague 2',
      preco: 5.99,
      foto: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400',
    },
    {
      id: '5',
      nome: 'Pão',
      tipo: 'Leve 2 e pague 1',
      preco: 4.50,
      foto: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
    },
    {
      id: '6',
      nome: 'Banana',
      tipo: 'Desconto no cartão da loja',
      preco: 3.99,
      foto: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Promoções</Text>

      <FlatList
        data={promocoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.foto }}
              style={styles.foto}
            />

            <Text style={styles.nome}>{item.nome}</Text>

            <Text>Promoção: {item.tipo}</Text>

            <Text style={styles.preco}>
              Preço promocional: R$ {item.preco.toFixed(2)}
            </Text>
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
    padding: 15,
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
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  foto: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#228B22',
    marginTop: 5,
  },
  voltar: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    padding: 15,
  },
});
