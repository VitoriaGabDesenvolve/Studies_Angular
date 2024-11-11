export enum TipoContato{
  AMIGO = "amigo",
  FAMILIA = "familia",
  TRABALHO = "trabalho"
}

export class Contato {
  private nome: string;
  private telefone: string;
  private email: string | undefined;
  private aniversario: string | undefined;
  private tipo: TipoContato | undefined;
  private favorito: boolean

  constructor(nome: string, tel: string, email?: string, aniversário?: string, tipo?: TipoContato | undefined, favorito: boolean = false) {
    this.nome = nome
    this.telefone = tel
    this.email = email
    this.aniversario = aniversário
    this.tipo = tipo
    this.favorito = favorito
  }

  // Alterar
  alterarNome(nome: string){
    this.nome = nome
  }

  alterarTelefone(tel:string){
    this.telefone = tel
  }

  alterarEmail(email:string){
    this.email = email
  }

  alterarAniveriario(aniversario:string){
    this.aniversario = aniversario
  }

  alterarTipoContato(tipo: TipoContato){
    this.tipo = tipo
  }

  // Exibir

  exibirNome(){
    return this.nome
  }

  exibirTelefone(){
    return this.telefone
  }

  exibirEmail(){
    return this.email
  }

  exibirAniversario(){
    return this.aniversario
  }

  exibirTipo(){
    return (this.tipo)
  }

  exibirFavorito(){
    return this.favorito
  }

}