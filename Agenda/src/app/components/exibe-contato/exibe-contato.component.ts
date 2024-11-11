import { Component } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import { Contato } from '../models/Contato';

@Component({
  selector: 'app-exibe-contato',
  templateUrl: './exibe-contato.component.html',
  styleUrl: './exibe-contato.component.css'
})
export class ExibeContatoComponent {

  constructor(public agenda: AgendaService){

  }

  getContatos(){
    return this.agenda.exibirlistaContatos()
  }

  contatosFavoritos(contato: Contato){
    if (contato.exibirFavorito() === true){
      return "❤️"
    } else {
      return "🤍"
    }
  }
}


