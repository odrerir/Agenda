import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/contato';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contatos:Contato[] =[];
  nome:string = "";
  telefone:string = "";
  constructor(private alertController: AlertController) {
    let cl : Contato = new Contato("Carlos", "429110221");
    let cl2 : Contato = new Contato("Jotair", "429110221");
    let cl3 : Contato = new Contato("Giovani", "429110221");
    this.contatos.push(cl);
    this.contatos.push(cl2);
    this.contatos.push(cl3)
  }

  cadastrar(){
    if(this.nome && this.telefone){
      let c:Contato = new Contato(this.nome,this.telefone);
      this.contatos.push(c);
    }else{
      this.presentAlert('Erro','Todos os campos são Obrigatórios.');
    }
    this.nome="";
    this.telefone="";
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
}
}