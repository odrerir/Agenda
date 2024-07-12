import { Injectable } from '@angular/core';
import Contato from './entity/Contato';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private PATH : string = 'contatos';

  constructor(private firestore : AngularFirestore) { }

  buscarTodos(){
    return this.firestore.collection(this.PATH).snapshotChanges();
  }
  cadastrar(contato:Contato){
    return this.firestore.collection(this.PATH).add({
      nome: contato.nome, telefone: contato.telefone,
      email: contato.email, genero: contato.genero
    });
  }
  editar(id:String){
    return this.firestore.collection(this.PATH).doc(id).update({
      nome: contato.nome, telefone: contato.telefone,
      email: contato.email, genero: contato.genero
    });
  }
  excluir(contato:Contato){
    return this.firestore.collection(this.PATH).doc(contato.id).delete();
  }
}
