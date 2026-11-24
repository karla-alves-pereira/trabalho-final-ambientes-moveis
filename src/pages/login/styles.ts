import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
    padding: 25,
  },

  header: {
    alignItems: 'center',
    marginBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0E3F70',
    marginTop: 15,
  },

  subtitle: {
    fontSize: 16,
    color: '#777',
    marginTop: 8,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 58,
    marginBottom: 22,
  },

  icon: {
    marginRight: 12,
    color: '#2563EB',
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  button: {
    backgroundColor: '#2F5D8C',
    height: 58,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  error: {
    color: '#FF494C',
    textAlign: 'center',
    marginBottom: 15,
  },

  buttonDisabled: {
    opacity: 0.6,
  },
});