import { FlatList, Image, StyleSheet, Text, View } from "react-native";

type SessaoItem = {
  id: string; nome: string; horario: string; tipoSessao: "2D" | "3D" | "VIP";
  preco: number; cartaz: string;
};
const listaSessoes: SessaoItem[] = [
  { id: "1", nome: "Interestelar", horario: "20:00", tipoSessao: "2D", preco: 25.50, cartaz: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { id: "2", nome: "O Exterminador do Futuro 2", horario: "15:00", tipoSessao: "3D", preco: 26.00, cartaz: "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTzb.jpg" },
  { id: "3", nome: "Rambo II: A Missão", horario: "13:00", tipoSessao: "2D", preco: 27.00, cartaz: "https://image.tmdb.org/t/p/w500/4I1xjEKZxeeBT6kyh2ry1xWB1gw.jpg" },
  { id: "4", nome: "Jurassic Park", horario: "14:40", tipoSessao: "3D", preco: 24.69, cartaz: "https://image.tmdb.org/t/p/w500/b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg" },
  { id: "5", nome: "Star Wars: Episódio III", horario: "18:00", tipoSessao: "3D", preco: 25.00, cartaz: "https://image.tmdb.org/t/p/w500/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg" },
  { id: "6", nome: "Curtindo a Vida Adoidado", horario: "14:00", tipoSessao: "VIP", preco: 30.00, cartaz: "https://image.tmdb.org/t/p/w500/9LTQNCvozX0his1T8JloZ9y8Udo.jpg" }
];

export default function Sessoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sessões especiais</Text>
      <Text style={styles.subtitle}>Escolha o horário e o formato da sua sessão.</Text>
      <FlatList data={listaSessoes} keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.cartaz }} style={styles.poster} resizeMode="cover"
              onError={() => {}} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.nome}</Text>
              <Text style={styles.info}>Horário: <Text style={styles.value}>{item.horario}</Text></Text>
              <Text style={styles.info}>Sessão: <Text style={styles.tag}>{item.tipoSessao}</Text></Text>
              <Text style={styles.price}>R$ {item.preco.toFixed(2).replace(".", ",")}</Text>
            </View>
          </View>
        )} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 18, paddingTop: 18 },
  heading: { color: "#fff", fontSize: 27, fontWeight: "900" },
  subtitle: { color: "#94a3b8", marginTop: 5, marginBottom: 18 },
  list: { paddingBottom: 24 },
  card: { flexDirection: "row", backgroundColor: "#172033", borderRadius: 14, marginBottom: 14, padding: 10, borderWidth: 1, borderColor: "#273449" },
  poster: { width: 94, height: 138, borderRadius: 9, backgroundColor: "#334155" },
  details: { flex: 1, paddingLeft: 13, justifyContent: "center" },
  title: { color: "#fff", fontSize: 16, fontWeight: "800", marginBottom: 9 },
  info: { color: "#94a3b8", marginTop: 4 },
  value: { color: "#e2e8f0" },
  tag: { color: "#fbbf24", fontWeight: "800" },
  price: { color: "#34d399", fontSize: 18, fontWeight: "900", marginTop: 12 }
});
