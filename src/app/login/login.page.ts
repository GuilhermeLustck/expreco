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
  resul:any

  constructor(private serv:DadosService,private rot:Router) { }

  ngOnInit() {
  }
  
 
valid(){

  //enviando para o service para validaçao de Login 

  this.resul=this.serv.login(this.email,this.senha)

  //verificaçao do retorno do service
  if(this.resul){

    this.erro="logado"
    
    this.rot.navigate(["menu"]);

  }else{

    this.erro="Email ou senha incorreta"
    
  }


}


}
