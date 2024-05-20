import { Component, OnInit } from '@angular/core';

import { DadosService } from '../conf/dados.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


 

  //abilita e desabilita o botão decadastramento
  status:boolean=false ;

  CPF:string='';
  Nome:string='';
  Email:string='';
  Senha:string='';
  confSenha:string='';
  Tel:string='';
  erro:string='';
  cep:number=0;
  //__________________________________________________________
  cssSenha1:string='';
  cssSenha2:string='';

  statusSenha:boolean=false;







  constructor( private sev:DadosService, private rot:Router ) { }

  ngOnInit(){}

//validaçã da senha
  validsenha(){


    if(this.Senha.length <= 10 && this.confSenha.length <= 10 ){
       
      this.cssSenha1="invalid"
     
    }else if( this.Senha !== this.confSenha ){

      this.cssSenha2="invalid"

    }else if( this.confSenha.length <= 10 ){

      this.cssSenha2="invalid"
 
    }else{

      this.cssSenha1="valid"
      this.cssSenha2="valid"
      this.statusSenha=true

    }
  

  }



  cadastro01(){

    if(this.CPF != "" && this.Email != "" && this.Nome != ""){

      this.erro="foi"

      
      //enviando ao service para o cadastro
      if(
      this.sev.cadas({
        CPFi: this.CPF ,
        Nome: this.Nome,
        Email: this.Email,
        Senha: this.Senha,
        Tel: this.Tel,
        CEPi:this.cep,
      })){

        this.erro="Cadastrado"

        this.rot.navigate(["login"])
      }

      
    }else{

      this.erro="falta"
      
    }
     
  }
}
