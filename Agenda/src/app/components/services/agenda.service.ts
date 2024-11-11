import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private listaContatos: Contato[]

  constructor(){
    this.listaContatos = []
  }

  cadastrarContato(Cont: Contato){
    if (Cont){
      this.listaContatos.push(Cont)
    }
  }

  exibirlistaContatos(){
    return this.listaContatos
  }

  obterPorEmail(email: string): Contato | undefined{
    for (let pos = 0; pos < this.listaContatos.length; pos++){
      if (this.listaContatos[pos].exibirEmail() == email){
        return this.listaContatos[pos]
      }
    }
    return
  }

  obterPorTelefone(telefone:string): Contato | undefined {
    for (let pos = 0; pos < this.listaContatos.length; pos++){
      if (this.listaContatos[pos].exibirTelefone() == telefone){
        return this.listaContatos[pos]
      }
    }
    return
  }

  obterPorNome(nome:string){
    let ContatosEncontrado: Contato[] = []
    for (let pos = 0; pos < this.listaContatos.length; pos++){
      if (this.listaContatos[pos].exibirNome() == nome){
        ContatosEncontrado.push(this.listaContatos[pos])
      }
     
    }
    return ContatosEncontrado
  }
}
