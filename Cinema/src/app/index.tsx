import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎬</Text>
      <Text style={styles.title}>CINESTAR</Text>
      <Text style={styles.subtitle}>Sua próxima história começa aqui.</Text>
      <Pressable style={styles.button} onPress={() => router.push("/filmes")}>
        <Text style={styles.buttonText}>🎞  Filmes em cartaz</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.secondary]} onPress={() => router.push("/sessoes")}>
        <Text style={styles.buttonText}>🕒  Ver sessões</Text>
      </Pressable>
      <Text style={styles.footer}>Bons filmes. Grandes momentos.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 28 },
  emoji: { fontSize: 58, marginBottom: 10 },
  title: { color: "#fbbf24", fontSize: 36, fontWeight: "900", letterSpacing: 4 },
  subtitle: { color: "#cbd5e1", fontSize: 15, marginTop: 8, marginBottom: 42, textAlign: "center" },
  button: { backgroundColor: "#e11d48", width: "100%", padding: 17, borderRadius: 14, marginBottom: 14, alignItems: "center" },
  secondary: { backgroundColor: "#334155" },
  buttonText: { color: "#fff", fontSize: 17, fontWeight: "700" },
  footer: { color: "#64748b", marginTop: 30, fontSize: 13 }
});
