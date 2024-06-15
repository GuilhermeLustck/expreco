import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})

export class DadosService {

  constructor(private auth:AngularFireAuth) { }
  
  
  id:any
  //---------------------------------------------------------------------------------------------


  async googleValid(): Promise<boolean>{
    try{

      await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider() );

      const user = await this.auth.currentUser;
      this.id=user?.uid

      if(this.id){
        sessionStorage.setItem("uidUser",this.id)
        console.log("log")
        return true

      }else{
        console.log("no log")
        return false

      }

    }catch (erro){
      console.log("no log")
      return false

    }


  }
 
  
  
  async cadas(senha:string,email:string){
    try{
      await this.auth.createUserWithEmailAndPassword(senha,email);
      
      console.log("cadastrado");
      
    }catch(erro:any){

      console.log(erro);

    }
    
  }

  async login(senha:string,email:string){
    try{
      await this.auth.signInWithEmailAndPassword(email,senha);
      const user= await this.auth.currentUser
      this.id=user?.uid

      sessionStorage.setItem("uidUser",this.id)
      console.log("foi logado")

      return true

      

    }catch(erro:any){

      console.log(erro)
      return false

    }

  }

  sair(){

    sessionStorage.setItem("uidUser","")
    console.log("LOGAUT")

  }

}
