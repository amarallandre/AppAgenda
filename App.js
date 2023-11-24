import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import CalendarioScreen from './src/screens/CalendarioScreen.js';
import AgendamentoScreen from './src/screens/AgendamentoScreen.js';
import ExcluirAgendamentoScreen from './src/screens/ExcluirAgendamentoScreen.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Agenda"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db', // Defina a cor de fundo do cabeçalho
          },
          
        }}
      >
        <Stack.Screen name="Agenda" component={HomeScreen} />
        <Stack.Screen name="Calendario" component={CalendarioScreen} />
        <Stack.Screen name="Agendamento" component={AgendamentoScreen} />
        <Stack.Screen name="Excluir Agendamentos" component={ExcluirAgendamentoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;