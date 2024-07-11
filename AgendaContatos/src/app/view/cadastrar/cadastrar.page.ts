import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ContatoService } from 'src/app/model/services/contato.service';
import Contato from 'src/app/model/services/entity/Contato';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  nome:string;
  telefone:string;
  email:string;
  genero:number;
  constructor(private alertController: AlertController,private contatoService: ContatoService, private router: Router) {
   }

  ngOnInit() {
  }

  cadastrar(){
    if(this.nome && this.telefone){
      let c:Contato = new Contato(this.nome,this.telefone);
      if(this.email){
        c.email = this.email;
      }
      if(this.genero){
        c.genero = this.genero;
      }else{
        c.genero = 0
      }
//      this.contatos.push(c);
      this.contatoService.cadastrar(c);
      this.router.navigate(['/home'])
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
