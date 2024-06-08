import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private rota:Router) {}

  ancora() {
    this.rota.navigate(['Cadastro']);
  }

  carrinho() {
    this.rota.navigate(['carrinho'])
  }
}
