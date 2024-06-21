import { Component, OnInit } from '@angular/core';
import { DadosService } from '../conf/dados.service';
import { ApiCepService } from '../conf/api/api-cep.service';
import { CarrinhoService } from '../conf/carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  Usuario:any
  carrinho:any
  ender:any
  vari: any

  TotalNum:Number=0



  constructor(private serv:CarrinhoService,private api:ApiCepService,private rot:Router) { }

  async ngOnInit() {

    this.ender=await (await this.api.getCep()).subscribe(
      (data)=>{
        this.ender=data
        console.log(this.ender)
      },
      (error)=>{
        console.error(error)
      }
    )
    

    this.vari=this.serv.getCar()
    this.carrinho=JSON.parse(this.vari)
    

    for (let i = 0; i < this.carrinho.length; i++) {

      this.TotalNum += this.carrinho[i].valor;
      
    }
  }

}
