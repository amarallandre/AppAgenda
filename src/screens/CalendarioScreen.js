import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles/CalendarioStyles';

const CalendarioScreen = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataSelecionada, setDataSelecionada] = useState('');

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

  const agendamentosMarcados = agendamentos.reduce((markedDates, agendamento) => {
    const formattedDate = agendamento.data.split('/').reverse().join('-'); // Formatando a data
    markedDates[formattedDate] = { selected: true, selectedColor: 'red' };
    return markedDates;
  }, {});
  
  console.log('Agendamentos marcados:', agendamentosMarcados);

  const showAgendamentosModal = (day) => {
    const formattedDate = day.dateString;
    setDataSelecionada(formattedDate);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={agendamentosMarcados}
        onDayPress={(day) => showAgendamentosModal(day)}
        style={styles.calendar}
      />
  
      {/* Sua view/modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Fechar a modal ao pressionar o botão Voltar no dispositivo (Android)
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{`Horários agendados para ${dataSelecionada}:`}</Text>
          {agendamentos.map((agendamento) => {
            const formattedDate = agendamento.data.split('/').reverse().join('-');
            if (formattedDate === dataSelecionada) {
              return (
                <View key={agendamento.hora} style={styles.agendamentoItem}>
                  <Text style={styles.agendamentoHora}>{`Hora: ${agendamento.hora}`}</Text>
                </View>
              );
            }
            return null;
          })}
          
          {/* Botão para fechar a modal */}
          <Button
            title="Fechar"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>
    </View>
  );
};



export default CalendarioScreen;