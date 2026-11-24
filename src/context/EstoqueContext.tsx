import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';

export interface Produto {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
}

interface EstoqueContextData {
  produtos: Produto[];
  cadastrarProduto: (
    nome: string,
    preco: number,
    quantidade: number
  ) => void;
  baixarProduto: (
    id: string,
    quantidade: number
  ) => boolean;
}

interface EstoqueProviderProps {
  children: ReactNode;
}

const EstoqueContext = createContext<
  EstoqueContextData | undefined
>(undefined);

export function EstoqueProvider({
  children,
}: EstoqueProviderProps) {

  const [produtos, setProdutos] = useState<Produto[]>([]);

  function cadastrarProduto(
    nome: string,
    preco: number,
    quantidade: number
  ) {
    const novoProduto: Produto = {
      id: Date.now().toString(),
      nome,
      preco,
      quantidade,
    };

    setProdutos((anteriores) => [
      ...anteriores,
      novoProduto,
    ]);
  }

  function baixarProduto(
    id: string,
    quantidade: number
  ): boolean {
    const produto = produtos.find(
      (item) => item.id === id
    );

    if (
      !produto ||
      !Number.isInteger(quantidade) ||
      quantidade <= 0 ||
      quantidade > produto.quantidade
    ) {
      return false;
    }

    setProdutos((anteriores) =>
      anteriores.map((item) =>
        item.id === id
          ? {
              ...item,
              quantidade: item.quantidade - quantidade,
            }
          : item
      )
    );

    return true;
  }

  return (
    <EstoqueContext.Provider
      value={{
        produtos,
        cadastrarProduto,
        baixarProduto,
      }}
    >
      {children}
    </EstoqueContext.Provider>
  );
}

export function useEstoque() {
  const context = useContext(EstoqueContext);

  if (!context) {
    throw new Error(
      'useEstoque deve ser utilizado dentro do EstoqueProvider.'
    );
  }

  return context;
}