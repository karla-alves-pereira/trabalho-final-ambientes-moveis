import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    padding: 25,
  },

  header: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 35,
  },

  lista: {
    flex: 1,
    minHeight: 0,
  },

  card: {
    backgroundColor: '#FFF',
    padding: 22,
    borderRadius: 12,
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },

  nomeProduto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },

  preco: {
    fontSize: 18,
    color: '#222',
    marginBottom: 15,
  },

  quantidade: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },

  cardStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 15,
  },

  textoStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  estoqueBaixo: {
    color: '#E69500',
  },

  estoqueNormal: {
    color: '#228B22',
  },

  listaVazia: {
    alignItems: 'center',
    marginTop: 40,
  },

  textoVazio: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginTop: 15,
  },

  subtituloVazio: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 8,
  },
});