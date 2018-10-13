import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditoraIndexComponent } from './editoras/ts/index.component';
import { EditoraService } from './editoras/ts/editora.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EditoraIndexComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
