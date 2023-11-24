import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faça a View ocupar toda a tela
    backgroundColor: 'black'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#3498db', // Cor de fundo do botão
    padding: 30,
    marginTop: 100,
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 20,

  },
  buttonContainer: {
    gap: 100,
    marginTop: 50,
    marginHorizontal: 20,
  },
});


export default styles;