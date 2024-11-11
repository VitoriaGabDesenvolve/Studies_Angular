import { Component } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import { Contato } from '../models/Contato';

@Component({
  selector: 'app-exibe-contato-favoritos',
  templateUrl: './exibe-contato-favoritos.component.html',
  styleUrl: './exibe-contato-favoritos.component.css'
})
export class ExibeContatoFavoritosComponent {

  private contatosfavoritos: Contato[] 
  constructor(public agenda: AgendaService){
    this.contatosfavoritos = []

  }

  verificarContato(contato: Contato) {
    for (let contatoCadastrado of this.contatosfavoritos) {
        if (
            contato.exibirTelefone() === contatoCadastrado.exibirTelefone()
        ) {
            return true;
        }
    }
    return false;
}

    getContatosFavoritos() {
        for (let contato of this.agenda.exibirlistaContatos()) {
            if (contato.exibirFavorito() === true && !this.verificarContato(contato)) {
                this.contatosfavoritos.push(contato);
            }
        }
    return this.contatosfavoritos;
    }

  

  contatosFavoritosEmoji(contato: Contato){
    if (contato.exibirFavorito() === true){
      return "❤️"
    } else {
      return "🤍"
    }
  }
}
