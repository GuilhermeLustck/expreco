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
  
 
  async valid(){

  //enviando para o service para validaçao de Login 
  this.resul=null

  this.resul= await this.serv.login(this.senha,this.email)

  //verificaçao do retorno do service
  if(this.resul){

    this.erro="logado"
    
    //this.rot.navigate(["menu"]);

  }else{

    this.erro="Email ou senha incorreta"
    
  }


}

async google(){

  await this.serv.googleValid()
  try{
    this.rot.navigate(["menu"])
  }catch(erro){
    this.erro="erro ao locar"
  }

}
}
