import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useEstoque } from '../../context/EstoqueContext';
import { styles } from './styles';

export default function SaidaProduto() {
  const { produtos, baixarProduto } = useEstoque();

  const [busca, setBusca] = useState('');
  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [motivo, setMotivo] = useState('Venda');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(
      busca.trim().toLowerCase()
    )
  );

  const produtoAtual = produtos.find(
    (produto) => produto.id === produtoSelecionado
  );

  function alterarBusca(texto: string) {
    setBusca(texto);
    setProdutoSelecionado('');
    setErro('');
    setSucesso('');
  }

  function confirmarSaida() {
    setErro('');
    setSucesso('');

    if (!produtoAtual) {
      setErro('Selecione um produto.');
      return;
    }

    if (!quantidade.trim()) {
      setErro('Informe a quantidade de saída.');
      return;
    }

    const quantidadeNumerica = Number(quantidade);

    if (
      !Number.isInteger(quantidadeNumerica) ||
      quantidadeNumerica <= 0
    ) {
      setErro('Informe uma quantidade inteira maior que zero.');
      return;
    }

    if (quantidadeNumerica > produtoAtual.quantidade) {
      setErro('Quantidade superior ao estoque disponível.');
      return;
    }

    const resultado = baixarProduto(
      produtoAtual.id,
      quantidadeNumerica
    );

    if (!resultado) {
      setErro('Não foi possível realizar a saída.');
      return;
    }

    setSucesso('Saída realizada com sucesso!');
    setBusca('');
    setProdutoSelecionado('');
    setQuantidade('');
    setMotivo('Venda');
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.rolagem}
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
      >

        <View style={styles.header}>
          <MaterialIcons
            name="output"
            size={45}
            color="#2563EB"
          />
        </View>

        <Text style={styles.label}>
          Buscar Produto
        </Text>

        <TextInput
          placeholder="Digite o nome do produto"
          value={busca}
          onChangeText={alterarBusca}
          style={styles.input}
        />

        <Text style={styles.label}>
          Selecionar Produto
        </Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={produtoSelecionado}
            onValueChange={(itemValue) => {
              setProdutoSelecionado(itemValue);
              setErro('');
              setSucesso('');
            }}
          >
            <Picker.Item
              label="Selecione um produto"
              value=""
            />

            {produtosFiltrados.map((produto) => (
              <Picker.Item
                key={produto.id}
                label={produto.nome}
                value={produto.id}
              />
            ))}
          </Picker>
        </View>

        {produtosFiltrados.length === 0 && (
          <Text style={styles.semResultados}>
            Nenhum produto encontrado.
          </Text>
        )}

        {produtoAtual && (
          <Text style={styles.quantidadeDisponivel}>
            Quantidade disponível: {produtoAtual.quantidade} unidades
          </Text>
        )}

        <Text style={styles.label}>
          Quantidade de Saída
        </Text>

        <TextInput
          placeholder="Digite a quantidade"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
          style={styles.input}
        />

        <Text style={styles.label}>
          Motivo da Saída
        </Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={motivo}
            onValueChange={(itemValue) => setMotivo(itemValue)}
          >
            <Picker.Item label="Venda" value="Venda" />
            <Picker.Item label="Avarias" value="Avarias" />
            <Picker.Item label="Uso Interno" value="Uso Interno" />
          </Picker>
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={confirmarSaida}
        >
          <Text style={styles.textoBotao}>
            Confirmar Saída
          </Text>
        </TouchableOpacity>

        {erro !== '' && (
          <Text style={styles.mensagemErro}>
            {erro}
          </Text>
        )}

        {sucesso !== '' && (
          <Text style={styles.mensagemSucesso}>
            {sucesso}
          </Text>
        )}

      </ScrollView>
    </View>
  );
}