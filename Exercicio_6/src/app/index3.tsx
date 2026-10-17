import { View, StyleSheet } from 'react-native';
import ExemploStyle_View1 from '../components/ExemploStyle_View1';
import ExemploStyle_View2 from '../components/ExemploStyle_View2';
import ExemploStyle_View3 from '../components/ExemploStyle_View3';

export default function Index() {
  return (
    <View style={styles.container}>
      <ExemploStyle_View1 />
      <ExemploStyle_View2 />
      <ExemploStyle_View3 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
