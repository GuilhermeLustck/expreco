import { Component, OnInit } from '@angular/core';
import { DadosService } from '../conf/dados.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string=""
  senha:string=""
  erro:string=""

  constructor(private serv:DadosService) { }

  ngOnInit() {
  }
  
 
valid(){

  if(this.serv.login({Email:this.email,Senha:this.senha})){

    this.erro="logado"
  }else{
    this.erro="não logado"
  }

}


}
