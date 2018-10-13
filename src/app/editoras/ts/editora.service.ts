import { Injectable } from '@angular/core';
import { Editora, ListaEditorasMock } from './editora.model'

@Injectable({
  providedIn: 'root',
})
export class EditoraService {
  constructor() { }

  lista = ListaEditorasMock;

  listar() : Editora[] {
    return this.lista;
  }

  obter(id:number) : Editora {
    return this.lista.filter(editora => editora.id == id)[0];
  }

  salvar(editora:Editora) : void {

  }
}