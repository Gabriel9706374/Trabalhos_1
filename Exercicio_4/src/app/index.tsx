import { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, Alert, ScrollView } from 'react-native';

export default function Index() {
 const [renda_anual, setRenda_anual] = useState('');
 const [idade, setIdade] = useState('');
 const [tem_clt, setTem_clt] = useState(false);
 const [tem_divida, setTem_divida] = useState(false);

function consultar_credito() {
 const renda = Number(renda_anual);
 const idade_cliente = Number(idade);

 if(renda_anual === '' || idade === '' || renda <= 0 || idade_cliente <= 0) {
 Alert.alert('Atenção', 'Informe uma renda anual e uma idade válidas.');
 return;
}

 if(tem_divida) {
  Alert.alert('sem direito a crédito', 'O correntista possui dívida.');
  return;
}

let percentual = 0;

 if(idade_cliente <= 24) {
 percentual=25;
}else if(idade_cliente <= 49) {
 percentual=40;
}else if(idade_cliente <= 64) {
 percentual=30;
}else{
 percentual=15
}

 if(tem_clt === false) {
  percentual=percentual/2;
}

const valor_credito=renda*percentual/100;

 Alert.alert(
      'Crédito aprovado',
      'Percentual: ' + percentual + '%' +
      '\nValor máximo: ' +
      valor_credito.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    );
}

return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Consulta de Crédito</Text>

      <Text style={styles.label}>Renda anual (R$):</Text>
      <TextInput
        style={styles.campo}
        value={renda_anual}
        onChangeText={setRenda_anual}
        placeholder="Ex.: 20000"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.campo}
        value={idade}
        onChangeText={setIdade}
        placeholder="Digite a idade"
        keyboardType="numeric"
      />

      <View style={styles.opcao}>
        <Text style={styles.label}>Possui vínculo CLT?</Text>
        <Switch value={tem_clt} onValueChange={setTem_clt} />
        <Text>{tem_clt ? 'Sim' : 'Não'}</Text>
      </View>

      <View style={styles.opcao}>
        <Text style={styles.label}>Possui dívida?</Text>
        <Switch value={tem_divida} onValueChange={setTem_divida} />
        <Text>{tem_divida ? 'Sim' : 'Não'}</Text>
      </View>

      <Button title="Consultar crédito" onPress={consultar_credito} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  campo: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 6,
    padding: 10,
    marginBottom: 18,
    fontSize: 16,
  },
  opcao: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
