import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCompraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
