import { Text, View } from "react-native";

const Gato = () => {
  const nome = () => {
    return "Flocos";
  };

  return (
    <View>
      {/*isso é um comentário*/}
      <Text>Gato {nome()}</Text>
    </View>
  );
};

export default Gato;
