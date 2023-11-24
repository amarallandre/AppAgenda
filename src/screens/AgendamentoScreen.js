import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles/AgendamentoStyles';
import CustomButton from '../components/CustomButton';

const AgendamentoScreen = () => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
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

  const handleAgendar = async () => {
    try {
      // Salvar novo agendamento na lista existente
      const novoAgendamento = { nome, data, hora };
      const novosAgendamentos = [...agendamentos, novoAgendamento];

      // Salvar lista de agendamentos no AsyncStorage
      await AsyncStorage.setItem('agendamentos', JSON.stringify(novosAgendamentos));

      // Atualizar o estado com a nova lista de agendamentos
      setAgendamentos(novosAgendamentos);

      console.log('Agendamento salvo localmente!');
    } catch (error) {
      console.error('Erro ao salvar agendamento:', error);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (selectedDate) => {
    hideDatePicker();
    const formattedDate = selectedDate.toLocaleDateString(); // Modificado para exibir apenas a data
    setData(formattedDate);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (selectedTime) => {
    hideTimePicker();
    const formattedTime = selectedTime.toLocaleTimeString(); // Modificado para exibir apenas a hora
    setHora(formattedTime);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            title={data ? `Data Selecionada: ${data}` : 'Selecionar Data'}
            onPress={showDatePicker}
          />
          <CustomButton
            title={hora ? `Hora Selecionada: ${hora}` : 'Selecionar Hora'}
            onPress={showTimePicker}
          />
        </View>

        <DateTimePickerModal
          textColor="black"
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />

        <DateTimePickerModal
          textColor="black"
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
        <View style={styles.buttonContainer}>
          <Button title="Agendar" onPress={handleAgendar} />
        </View>

        {/* Lista de agendamentos salvos */}
        <FlatList
          data={agendamentos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>Nome: {item.nome}</Text>
              <Text>Data: {item.data}</Text>
              <Text>Hora: {item.hora}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default AgendamentoScreen;