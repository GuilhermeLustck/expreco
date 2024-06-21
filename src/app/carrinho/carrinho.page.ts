import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../conf/carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  anunci:any
  nad:any
  
  constructor( private carrin:CarrinhoService,private rot:Router) { }

  ngOnInit() {

   this.nad=this.carrin.getCar()
   this.anunci=JSON.parse(this.nad)

  
  }




  paga(){
    this.rot.navigate(["pagamento"])
  }
  
}
