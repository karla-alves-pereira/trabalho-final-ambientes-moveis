import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },

  rolagem: {
    flex: 1,
    minHeight: 0,
  },

  conteudo: {
    padding: 25,
    paddingBottom: 35,
  },

  header: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 35,
  },

  label: {
    fontWeight: '600',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 14,
    marginBottom: 22,
  },

  pickerContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    marginBottom: 22,
    overflow: 'hidden',
  },

  quantidadeDisponivel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#228B22',
    marginBottom: 22,
  },

  botao: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  mensagemErro: {
    color: '#DC2626',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
  },

  mensagemSucesso: {
    color: '#228B22',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 15,
  },

  semResultados: {
    color: '#777',
    fontSize: 14,
    marginBottom: 20,
  },
});