export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Product[];
};

export type Product = {
  id: number;
  preco: number;
  foto: string;
  nome: string;
  descricao: string;
  porcao: string;
};
