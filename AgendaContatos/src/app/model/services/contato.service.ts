import { Injectable } from '@angular/core';
import Contato from './entity/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatos: Contato[] = [];
  constructor() { 
      let cl: Contato = new Contato("Carlos", "429110221");
      let cl2: Contato = new Contato("Jotair", "429110221");
      let cl3: Contato = new Contato("Giovani", "429110221");
      this.contatos.push(cl);
      this.contatos.push(cl2);
      this.contatos.push(cl3);
    
  }

  obterTodos() : Contato[]{
    return this.contatos;
  }
  obterPorIndice(indice : number) : Contato{
    return this.contatos[indice];
  }
  cadastrar(contato : Contato){
    this.contatos.push(contato);
  }
}
