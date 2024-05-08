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
  dados:any
  user:any
 
  
  
  cadas(values:any){

    this.CPFi  = values.CPF
    this.Nome  = values.Nome
    this.Email = values.Email
    this.Senha = values.Senha
    this.Tel   = values.Tel
    
    this.dados={
      "Nome":this.Nome,
      "Email":this.Email,
      "Senha":this.Senha,
      "CPF":this.CPFi,
      "Tel":this.Tel,
    }

    localStorage.setItem("user",JSON.stringify(this.dados))
    
  }

  login(val:any){
    this.Email=val.email
    this.Senha=val.Senha

    this.user=localStorage.getItem("user")
    this.user=JSON.parse(this.user)

    if(this.Senha===this.user.Senha && this.Email===this.user.Email){

      return true
      
    }else{

      return false

    }



  }

}
