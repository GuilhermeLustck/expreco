import { Component, OnInit } from '@angular/core';
import { DadosService } from '../conf/dados.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  Usuario:any

  constructor(private serv:DadosService) { }

  ngOnInit() {

    
  }

  pagamento(){




  }
}
