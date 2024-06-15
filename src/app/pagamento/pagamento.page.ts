import { Component, OnInit } from '@angular/core';
import { DadosService } from '../conf/dados.service';
import { ApiCepService } from '../conf/api/api-cep.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  Usuario:any

  ender:any
  constructor(private serv:DadosService,private api:ApiCepService) { }

  async ngOnInit() {

    this.ender=await (await this.api.getCep()).subscribe(
      (data)=>{
        this.ender=data
        console.log(this.ender)
      },
      (error)=>{
        console.error
      }
    )
    console.log(this.ender)

  }

  pagamento(){




  }
}
