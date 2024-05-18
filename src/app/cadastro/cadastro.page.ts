import { Component, OnInit, input } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from '../conf/dados.service';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


 

  //abilita e desabilita o botão decadastramento
  status:boolean=false ;

  CPF:string=''
  Nome:string=''
  Email:string=''
  Senha:string=''
  confSenha:string=''
  Tel:string=''
  erro:string=''
  cep:number=0

  cssSenha1:string=''
  cssSenha2:string=''

  statusSenha:boolean=false


  //excluir depois
  nada:any





  constructor( private sev:DadosService, public rot:Router ) { }

  ngOnInit(){}


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



  algo(){

    if(this.CPF != "" && this.Email != "" && this.Nome != ""){

      this.erro="foi"

      if(
      this.sev.cadas({
        CPFi: this.CPF ,
        Nome: this.Nome,
        Email: this.Email,
        Senha: this.Senha,
        Tel: this.Tel,
      })){

        this.rot.navigate(["login"])

        this.erro="Login"
      }

      


    }else{

      this.erro="falta"
      
    }
     
  }
}
