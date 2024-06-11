import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})

export class DadosService {

  constructor(private auth:AngularFireAuth) { }
  
  
  id:any
  //---------------------------------------------------------------------------------------------


  
 
  
  
  async cadas(senha:string,email:string){
    try{
      await this.auth.createUserWithEmailAndPassword(email,senha);
    
      console.log("cadastrado");
      
    }catch(erro:any){

      console.log(erro);

    }
    
   
    
  }

  async login(senha:string,email:string){
    try{
      await this.auth.signInWithEmailAndPassword(senha,email);
      const user= await this.auth.currentUser
      this.id=user?.uid

      
      sessionStorage.setItem("uidUser",this.id)
      console.log("foi logado")
      
      

    }catch(erro:any){

      console.log(erro)

    }



  }



  

  
}
