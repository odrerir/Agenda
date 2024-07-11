import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ContatoService } from 'src/app/model/services/contato.service';
import Contato from 'src/app/model/services/entity/Contato';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contatos:Contato[] =[];

  constructor(private router: Router, private contatosService:ContatoService) {
    this.contatos = this.contatosService.obterTodos();
  }
  irParaCadastrar(){
    this.router.navigate(['/cadastrar']);
  }

  editar(indice:number){
    this.router.navigate(['/editar', indice]);
  }
}