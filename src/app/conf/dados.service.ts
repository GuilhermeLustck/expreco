import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class DadosService {

  constructor() { }
  
  CPFi:string=''
  Nome:string=''
  Email:string=''
  Senha:string=''
  Tel:string=''
  CEPi:string=''
  EmailLogin:string=''
  SenhaLogin:string=''
  //---------------------------------------------------------------------------------------------
  dados:any
  user:any

  
 
  
  
  cadas(values:any){

    this.CPFi  = values.CPFi,
    this.Nome  = values.Nome,
    this.Email = values.Email,
    this.Senha = values.Senha,
    this.Tel   = values.Tel,
    this.CEPi = values.CEPi
    
    this.dados={
      "Nome":this.Nome,
      "Email":this.Email,
      "Senha":this.Senha,
      "CPF":this.CPFi,
      "Tel":this.Tel,
      "CEP":this.CEPi
    }

    localStorage.setItem("user",JSON.stringify(this.dados))

    return true
    
  }





  login(val:any){
    this.EmailLogin=val.LEmail
    this.SenhaLogin=val.LSenha

    this.user=localStorage.getItem("user")

    this.user=JSON.parse(this.user)

    if(this.user.Senha === this.SenhaLogin && this.user.Email===this.EmailLogin){

      return true

    }else{

      return false
    }



  }



  exibirUser(){
    this.user=localStorage.getItem("user")
    this.user=JSON.parse(this.user)



    return this.user
  }

  
}
