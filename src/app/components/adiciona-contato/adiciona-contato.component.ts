import { Component } from '@angular/core';
import { Contato, TipoContato } from './models/Contato';
import { Agenda } from './models/Agenda';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css'
})
export class AdicionaContatoComponent {
  agenda: Agenda = new Agenda(); //inicia a agenda
  tipos = Object.values(TipoContato) // tipos pega os valores do Enum
  // contatos pega os valores que retorna a lista de numeros na lista de contatos 
  mensagem: string = ""

  getContatos(){
    return this.agenda.exibirlistaContatos()
  }

  getTipo(tipo: string | undefined){ //transforma o tipo de string (que vem do formulário) para o enum
    if (tipo === TipoContato.AMIGO){
      return TipoContato.AMIGO
    }
    else if (tipo === TipoContato.FAMILIA){
      return TipoContato.FAMILIA
    }
    else if (tipo === TipoContato.TRABALHO){
      return TipoContato.TRABALHO
    }
    return
  }

  formatDate(aniversario: string | undefined){ // formata a data que recebemos, pois ela vem ano-mes-dia
    const data = aniversario?.split('-').reverse().join('/') // separa no -, inverte os valores e junta com /
    return data
  }

  cadastrarContato(nome: string, numero: string, email?: string, aniversario?: string, tipo?: string){
    this.mensagem = ""
    for (let contato of this.getContatos()){ //percorre pela lista de contatos
      if (contato.exibirTelefone() === numero){ //verifica se já possui um contato com o número digitado
        this.mensagem = "já existe contato com esse número"
        return
      }
    }
    if(nome && numero){ // se tiver nome e numero
      if (numero.length < 11){
        this.mensagem = "o número deve conter no mínimo 11 dígitos"
        return
      }
      const novoContato = new Contato(nome, numero, email, this.formatDate(aniversario), this.getTipo(tipo)) //cria novo contato
      this.agenda.cadastrarContato(novoContato) // adiciona na agenda
      this.mensagem = "usuário cadastrado"
    } else if (nome) {
      this.mensagem = "o número do contato é obrigátorio para o cadastro"
    } else if (numero) {
      this.mensagem = "o nome do contato é obrigátorio para o cadastro"
    }
  }
}
