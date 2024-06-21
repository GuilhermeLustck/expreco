import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../conf/carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  anunci:any

  constructor(private serv:CarrinhoService,private nav:Router) { }

  ngOnInit() {
    this.anunci=this.serv.get()
    console.log(this.serv.getCar())
  }


  detall(id:any){
    this.nav.navigate([`product-detail/`,id])
  }

}
