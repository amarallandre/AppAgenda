import React from 'react';
import { Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/HomeStyles'; // Importe os estilos corretamente

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCalendarioPress = () => {
    navigation.navigate('Calendario');
  };

  const handleAgendamentoPress = () => {
    navigation.navigate('Agendamento');
  };

  const handleExcluirAgendamentoPress = () => {
    navigation.navigate('ExcluirAgendamento');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton title="Calendário" onPress={handleCalendarioPress} />
        <CustomButton title="Agendamento" onPress={handleAgendamentoPress} />
        <CustomButton title="Excluir agendamento" onPress={handleExcluirAgendamentoPress} />
      </View>
    </View>
  );
};

export default HomeScreen;