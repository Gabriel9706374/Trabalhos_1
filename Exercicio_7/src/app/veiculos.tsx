import { FlatList, StyleSheet, Text, View } from "react-native";

const veiculo = [
 { id: "1", nome: "Fiat Uno", ano: "2012" },
 { id: "2", nome: "Volkswagen Gol", ano: "2018" },
 { id: "3", nome: "Chevrolet Onix", ano: "2022" },
 { id: "4", nome: "Toyota Corolla", ano: "2020" },
 { id: "5", nome: "Honda Civic", ano: "2019" },
];

function cabecalho() {
 return (
  <View style={styles.cabecalho}>
   <Text style={styles.titulo}>Lista de Veículos</Text>
  </View>
 );
}

function Rodape() {
 return (
  <View style={style.rodape}>
   <Text>Fim da lista de veículos</Text>
  </View>
 );
}

function Separador() {
  return <View style={styles.separador} />;
}

export default function Veiculos() {
 return (
  <FlatList
   data={veiculo}
   keyExtractor={(item) => item.id}
   renderItem={({item})=>(
    <View style={styles.item}>
     <Text>Veículo: {item.nome}</Text>
     <Text>Ano: {item.ano}</Text>
    </View>
   )}
   ListHeaderComponent={Cabecalho}
   ListFooterComponent={Rodape}
   ItemSeparatorComponent={Separador}
  />
 );
}

const styles = StyleSheet.create({
  cabecalho: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#dbeafe",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
  },
  item: {
    padding: 16,
  },
  separador: {
    height: 1,
    backgroundColor: "#999",
    marginHorizontal: 16,
  },
  rodape: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#eeeeee",
  },
});
