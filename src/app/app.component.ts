import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private rota:Router) {}

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
}
