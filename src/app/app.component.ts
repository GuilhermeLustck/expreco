import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from './conf/dados.service';
import { CarrinhoService } from './conf/carrinho.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private rota:Router,private serv:DadosService,private servCar:CarrinhoService) {}

  cadastro(){
    this.rota.navigate(["cadastro"]);
  }

  carrinho(){
    
    this.rota.navigate(["carrinho"]);
  }

  pagamento(){
    
    this.rota.navigate(["pagamento"]);
  }

  Login(){
    this.rota.navigate(["login"]);
  }
  
  menu(){
    this.rota.navigate(["menu"])
  }

  perfil(){
    this.rota.navigate(["perfil"])
  }

  logaut(){
    this.serv.sair()
    this.rota.navigate(["menu"])
  }
}
