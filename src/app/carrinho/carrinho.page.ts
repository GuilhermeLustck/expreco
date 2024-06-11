import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../conf/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  anunci:any
  constructor( private carrin:CarrinhoService) { }

  ngOnInit() {
    this.anunci=this.carrin.get()
  }
  
  
}
