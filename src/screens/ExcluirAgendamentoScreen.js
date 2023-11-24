import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles/ExcluirAgendamentoStyles'; // Importe os estilos

const ExcluirAgendamentoScreen = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    // Carregar dados salvos ao inicializar o componente
    retrieveAgendamentos();
  }, []);

  const retrieveAgendamentos = async () => {
    try {
      // Recuperar agendamentos do AsyncStorage
      const savedAgendamentos = await AsyncStorage.getItem('agendamentos');

      if (savedAgendamentos !== null) {
        setAgendamentos(JSON.parse(savedAgendamentos));
      }
    } catch (error) {
      console.error('Erro ao recuperar agendamentos:', error);
    }
  };

  const handleExcluirAgendamento = async (index) => {
    try {
      // Obter agendamentos existentes
      const agendamentosAtuais = [...agendamentos];

      // Remover o agendamento pelo índice
      agendamentosAtuais.splice(index, 1);

      // Atualizar estado e salvar no AsyncStorage
      setAgendamentos(agendamentosAtuais);
      await AsyncStorage.setItem('agendamentos', JSON.stringify(agendamentosAtuais));

      console.log('Agendamento excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir agendamento:', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={agendamentos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemName}>Nome: {item.nome}</Text>
            <Text style={styles.itemDetails}>Data: {item.data}</Text>
            <Text style={styles.itemDetails}>Hora: {item.hora}</Text>
            <Button
              title="Excluir Agendamento"
              onPress={() => handleExcluirAgendamento(index)}
              color="red"
              style={styles.deleteButton}
            />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

export default ExcluirAgendamentoScreen;