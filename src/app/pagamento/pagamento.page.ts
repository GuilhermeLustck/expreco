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

  ngOnInit() {

  this.ender=this.api.getCep()

  }

  pagamento(){




  }
}
