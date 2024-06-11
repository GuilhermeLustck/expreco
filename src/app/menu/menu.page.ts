import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../conf/carrinho.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  anunci:any

  constructor(private serv:CarrinhoService) { }

  ngOnInit() {
    this.anunci=this.serv.get()
  }

}
