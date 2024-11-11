import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionaContatoComponent } from './components/adiciona-contato/adiciona-contato.component';
import { ExibeContatoComponent } from './components/exibe-contato/exibe-contato.component';
import { ExibeContatoFavoritosComponent } from './components/exibe-contato-favoritos/exibe-contato-favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionaContatoComponent,
    ExibeContatoComponent,
    ExibeContatoFavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
