import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './styles/AgendamentoStyles';
import CustomButton from '../components/CustomButton';

const AgendamentoScreen = () => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const handleAgendar = () => {
    // Implemente a lógica de agendamento aqui
    console.log('Nome:', nome);
    console.log('Data:', data);
    console.log('Hora:', hora);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = (selectedDate) => {
    hideDatePicker();
    const formattedDate = selectedDate.toISOString();
    setData(formattedDate);
  };

  const handleTimeConfirm = (selectedTime) => {
    hideTimePicker();
    const formattedTime = selectedTime.toISOString();
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
      <CustomButton title="Selecionar Data" onPress={showDatePicker} />
      <CustomButton title="Selecionar Hora" onPress={showTimePicker} />
    </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />

        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
        <View style={styles.buttonContainer}>
        <Button title="Agendar" onPress={handleAgendar} />
        </View>
      </View>
    </View>
  );
};

export default AgendamentoScreen;