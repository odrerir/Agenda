import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from 'src/app/model/services/contato.service';
import Contato from 'src/app/model/services/entity/Contato';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  contato: Contato;
  nome:string;
  telefone:string;
  email:string;
  genero:number;
  indice:number;
  edicao:boolean = false;
  constructor(private actRoute: ActivatedRoute, private contatoService:ContatoService, private router:Router) {}

  ngOnInit() {
    this.actRoute.params.subscribe((parametros) => {
        if(parametros["indice"]){
          this.indice = parametros["indice"];
          this.contato = this.contatoService.obterPorIndice(parametros["indice"]);
        }
      }
      );
      this.nome = this.contato.nome;
      this.telefone = this.contato.telefone;
      this.email = this.contato.email;
      this.genero = this.contato.genero;
  }

  habilitar(){
    if(!this.edicao){
      this.edicao = true;
    }else{
      this.edicao = false;
    }
  }

  excluir(){
    //Fazer confirmação
    this.contatoService.excluir(this.indice);
    this.router.navigate(['/home']);
  }
  salvar(){
    //Fazer validação
    let novo: Contato = new Contato(this.nome, this.telefone);
    novo.email = this.email;
    novo.genero = this.genero;
    this.contatoService.editar(this.indice, novo);
    this.router.navigate(['/home']);
  }
  }

