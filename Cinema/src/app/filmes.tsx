import { FlatList, StyleSheet, Text, View } from "react-native";
import Filme from "./components/filme";
import { FilmeProps } from "@/types/FilmeProps";

const listaFilmes: FilmeProps[] = [
  { titulo: "Interestelar", genero: "Ficção científica / Aventura", duracao: "2h 49min", classificacao: "10 anos" },
  { titulo: "Star Wars: Episódio III – A Vingança dos Sith", genero: "Ação / Ficção científica", duracao: "2h 20min", classificacao: "14 anos" },
  { titulo: "Rambo II: A Missão", genero: "Ação / Guerra", duracao: "1h 36min", classificacao: "16 anos" },
  { titulo: "De Volta para o Futuro", genero: "Ficção científica / Comédia", duracao: "1h 56min", classificacao: "12 anos" },
  { titulo: "O Exterminador do Futuro 2", genero: "Ação / Ficção científica", duracao: "2h 17min", classificacao: "14 anos" },
  { titulo: "Batman: O Cavaleiro das Trevas", genero: "Ação / Crime", duracao: "2h 32min", classificacao: "12 anos" },
  { titulo: "Matrix", genero: "Ação / Ficção científica", duracao: "2h 16min", classificacao: "14 anos" },
  { titulo: "Jurassic Park: O Parque dos Dinossauros", genero: "Aventura / Ficção científica", duracao: "2h 7min", classificacao: "10 anos" },
  { titulo: "Indiana Jones e os Caçadores da Arca Perdida", genero: "Aventura / Ação", duracao: "1h 55min", classificacao: "10 anos" },
  { titulo: "Curtindo a Vida Adoidado", genero: "Comédia", duracao: "1h 42min", classificacao: "12 anos" }
];

export default function Filmes() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Filmes em cartaz</Text>
      <Text style={styles.subtitle}>Confira os títulos disponíveis no CineStar.</Text>
      <FlatList data={listaFilmes} keyExtractor={(item) => item.titulo}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <Filme {...item} />} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 18, paddingTop: 18 },
  heading: { color: "#fff", fontSize: 27, fontWeight: "900" },
  subtitle: { color: "#94a3b8", marginTop: 5, marginBottom: 18 },
  list: { paddingBottom: 24 }
});
