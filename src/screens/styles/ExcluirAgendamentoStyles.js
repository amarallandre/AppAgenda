import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faça a View ocupar toda a tela
    backgroundColor: 'black'
  },
  listItem: {
    backgroundColor: '#3498db', // Cor de fundo do botão
    padding: 10,
    marginTop: 20,

    borderRadius: 20,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 16,
    color: '#555',
  },
  deleteButton: {
    marginTop: 8,
  },
  itemSeparator: {
    height: 1, // Altura do espaçamento entre os itens
  },
});

export default styles;