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
  private _nome: string;
  private _telefone: string;
  private _email: string;
  private _genero: number;

  constructor(private alertController: AlertController, private contatoService : ContatoService, private router : Router) { }

  ngOnInit() {
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  public get telefone(): string {
    return this._telefone;
  }
  public set telefone(value: string) {
    this._telefone = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get genero(): number {
    return this._genero;
  }
  public set genero(value: number) {
    this._genero = value;
  }

  cadastrar() {
    if (this.nome && this.telefone) {
      let c: Contato = new Contato(this.nome, this.telefone);
      if (this.email) {
        c.email = this.email;
      }
      if (c.genero) {
        c.genero = this.genero;
      } else {
        c.genero = 0;
      }
      this.contatoService.cadastrar(c);
      this.router.navigate(['/home']);
    } else {
      this.presentAlert('Erro', 'Todos os campos são Obrigatórios.');
    }
    this.nome = "";
    this.telefone = "";
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
