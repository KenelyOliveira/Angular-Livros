import { Component, Input } from '@angular/core';
import { Editora } from './editora.model';
import { EditoraService } from './editora.service';

@Component({
  selector: 'editora',
  templateUrl: '../index.component.html',
})
export class EditoraIndexComponent  {
  editoras: Editora[];
  
  constructor(private serv:EditoraService){
    this.editoras = this.serv.listar();
  }
}
