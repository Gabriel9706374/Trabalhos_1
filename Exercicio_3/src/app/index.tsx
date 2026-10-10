import ExemploStyle_Text from "@/components/ExemploStyle_Text";
import ExemploStyle_View from "@/components/ExemploStyle_View";
import Cachorro from "@/components/Cachorro";
import Gato from "@/components/Gato";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  Alert,
  Switch,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ExemploStyle_View1 />
     {/*<ExemploStyle_View2 />*/}
     {/*<ExemploStyle_View3 /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
