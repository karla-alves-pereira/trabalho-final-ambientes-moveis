import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Input } from '../../components/input';
import { styles } from './styles';

type LoginNavigation = StackNavigationProp<{
  Login: undefined;
  Principal: undefined;
}, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginNavigation>();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  function entrar() {
    setErro('');

    if (!email.trim() || !senha.trim()) {
      setErro('Preencha todos os campos.');
      return;
    }

    setCarregando(true);

    setTimeout(() => {
      if (
        email.trim().toLowerCase() === 'admin@estoque.com' &&
        senha === '123456'
      ) {
        setCarregando(false);
        navigation.replace('Principal');
      } else {
        setErro('E-mail ou senha incorretos.');
        setCarregando(false);
      }
    }, 1500);
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <MaterialIcons
          name="inventory-2"
          size={65}
          color="#2563EB"
        />

        <Text style={styles.title}>
          Gestão de Estoque
        </Text>

        <Text style={styles.subtitle}>
          Entre para acessar o sistema
        </Text>
      </View>

      <Text style={styles.label}>E-mail</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="email"
          size={24}
          style={styles.icon}
        />

        <Input
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          editable={!carregando}
        />
      </View>

      <Text style={styles.label}>Senha</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="lock"
          size={24}
          style={styles.icon}
        />

        <Input
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
          style={styles.input}
          editable={!carregando}
        />

        <TouchableOpacity
          onPress={() => setMostrarSenha(!mostrarSenha)}
          accessibilityLabel={
            mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'
          }
        >
          <MaterialIcons
            name={mostrarSenha ? 'visibility-off' : 'visibility'}
            size={24}
            color="#777"
          />
        </TouchableOpacity>
      </View>

      {erro !== '' && (
        <Text style={styles.error}>{erro}</Text>
      )}

      <TouchableOpacity
        style={[
          styles.button,
          carregando && styles.buttonDisabled,
        ]}
        onPress={entrar}
        disabled={carregando}
      >
        {carregando ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

    </View>
  );
}