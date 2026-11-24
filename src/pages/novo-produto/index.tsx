import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Input } from '../../components/input';
import { useEstoque } from '../../context/EstoqueContext';
import { styles } from './styles';

export default function NovoProduto() {
  const { cadastrarProduto } = useEstoque();

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  function realizarCadastro() {
    if (!nome.trim() || !preco.trim() || !quantidade.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const precoNumerico = Number(preco.replace(',', '.'));
    const quantidadeNumerica = Number(quantidade);

    if (!Number.isFinite(precoNumerico) || precoNumerico <= 0) {
      Alert.alert('Atenção', 'Informe um preço válido.');
      return;
    }

    if (
      !Number.isInteger(quantidadeNumerica) ||
      quantidadeNumerica < 0
    ) {
      Alert.alert(
        'Atenção',
        'Informe uma quantidade inteira e não negativa.'
      );
      return;
    }

    cadastrarProduto(
      nome.trim(),
      precoNumerico,
      quantidadeNumerica
    );

    setNome('');
    setPreco('');
    setQuantidade('');

    Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="inventory"
          size={42}
          style={styles.headerIcon}
        />
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="sell"
            size={24}
            style={styles.icon}
          />

          <Input
            style={styles.input}
            placeholder="Nome do Produto"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons
            name="attach-money"
            size={24}
            style={styles.icon}
          />

          <Input
            style={styles.input}
            placeholder="Preço de Venda"
            value={preco}
            onChangeText={setPreco}
            keyboardType="decimal-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons
            name="inventory-2"
            size={24}
            style={styles.icon}
          />

          <Input
            style={styles.input}
            placeholder="Quantidade de entrada"
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={realizarCadastro}
        >
          <Text style={styles.buttonText}>
            Cadastrar Produto
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}