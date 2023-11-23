import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  
  button: {    
    backgroundColor: '#3498db', // Cor de fundo do botão
    padding: 50,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;