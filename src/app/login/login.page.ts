import { Component, OnInit } from '@angular/core';
import { DadosService } from '../conf/dados.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string=""
  senha:string=""
  erro:string=""
  resul:boolean=false

  constructor(private serv:DadosService,private rot:Router) { }

  ngOnInit() {
  }
  
 
valid(){

  //enviando para o service para validaçao de Login 
  this.resul=this.serv.login({
    LEmail:this.email,
    LSenha:this.senha

  })
//vficaçao do retorno do service (false ou true) em boolean
  if(this.resul){

    this.erro="logado"
    this.rot.navigate(["pagamento"]);

  }else{

    this.erro="Email ou senha incorreta"
    
  }

}


}
