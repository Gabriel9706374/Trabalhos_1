import { FilmeProps } from "@/types/FilmeProps";
import { StyleSheet, Text, View } from "react-native";

export default function Filme({ titulo, genero, duracao, classificacao }: FilmeProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.info}>Gênero: <Text style={styles.value}>{genero}</Text></Text>
      <Text style={styles.info}>Duração: <Text style={styles.value}>{duracao}</Text></Text>
      <Text style={styles.info}>Classificação: <Text style={styles.rating}>{classificacao}</Text></Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor: "#172033", padding: 16, marginBottom: 12, borderRadius: 14, borderWidth: 1, borderColor: "#273449" },
  title: { color: "#fff", fontSize: 17, fontWeight: "800", marginBottom: 8 },
  info: { color: "#94a3b8", marginTop: 3, fontSize: 14 },
  value: { color: "#e2e8f0" },
  rating: { color: "#fbbf24", fontWeight: "700" }
});
