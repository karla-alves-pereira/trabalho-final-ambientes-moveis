import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useEstoque } from '../../context/EstoqueContext';
import { styles } from './styles';

export default function ControleEstoque() {
  const { produtos } = useEstoque();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <MaterialIcons
          name="inventory-2"
          size={45}
          color="#2563EB"
        />
      </View>

     <FlatList
      style={styles.lista}
      data={produtos}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={true}
      scrollEnabled={true}

        ListEmptyComponent={
          <View style={styles.listaVazia}>
            <MaterialIcons
              name="inventory-2"
              size={55}
              color="#AAA"
            />

            <Text style={styles.textoVazio}>
              Nenhum produto cadastrado
            </Text>

            <Text style={styles.subtituloVazio}>
              Cadastre um produto para visualizar o estoque.
            </Text>
          </View>
        }

        renderItem={({ item }) => {
          const estoqueBaixo = item.quantidade <= 5;

          return (
            <View style={styles.card}>

              <Text style={styles.label}>
                Nome do Produto
              </Text>

              <Text style={styles.nomeProduto}>
                {item.nome}
              </Text>

              <Text style={styles.label}>
                Preço de Venda
              </Text>

              <Text style={styles.preco}>
                {item.preco.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>

              <Text style={styles.label}>
                Quantidade Atual
              </Text>

              <Text style={styles.quantidade}>
                {item.quantidade} unidades
              </Text>

              <View style={styles.cardStatus}>
                <MaterialIcons
                  name={
                    estoqueBaixo
                      ? 'warning'
                      : 'check-circle'
                  }
                  size={25}
                  color={
                    estoqueBaixo
                      ? styles.estoqueBaixo.color
                      : styles.estoqueNormal.color
                  }
                />

                <Text
                  style={[
                    styles.textoStatus,
                    estoqueBaixo
                      ? styles.estoqueBaixo
                      : styles.estoqueNormal,
                  ]}
                >
                  {estoqueBaixo
                    ? 'Estoque Baixo'
                    : 'Em Estoque'}
                </Text>
              </View>

            </View>
          );
        }}
      />

    </View>
  );
}