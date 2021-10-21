export interface Group {
  grupo: string;
  elementos: Elemento[];
}

export interface Elemento {
  codigo: string;
  descripcion: string;
  valor: string;
}
