export class Editora {
  id: number;
  codigo: string;
  nome: string;
  website: string;
}

export const ListaEditorasMock: Editora[] = [
  { id: 1, codigo: "1", nome: 'Cia das Letras', website: '' },
  { id: 2, codigo: "2", nome: 'DarkSide', website: '' },
  { id: 3, codigo: "3", nome: 'Marvel', website: '' },
];