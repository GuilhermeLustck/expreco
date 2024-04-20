import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formulario: FormGroup = new FormGroup({});

  //abilita e desabilita o botão decadastramento
  status:boolean=false ;

  CPFi:string=''
  Nome:string=''
  Email:string=''
  Senha:string=''
  Tel:string=''
  algo1:string=''

  constructor (private Form: FormBuilder,private nav:Router) { }



  ngOnInit(): void{
    
    

    this.formulario = this.Form.group({
      
      Nome: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Senha: ['', [Validators.required]],
      CPFi: ['', [Validators.required]],
      Tel: ['', [Validators.minLength(9), Validators.required]],
    });
    
    console.log("FormGroup inicializado:", this.formulario.value);
    
  }
  
  algo(){

    this.formulario.setValue({
      Nome: this.Nome,
      Email: this.Email,
      Senha: this.Senha,
      CPFi: this.CPFi,
      Tel: this.Tel
    });


    // Atualizar manualmente o modelo
    this.formulario.updateValueAndValidity();
    
    console.log(this.formulario.value); 
    console.log(this.formulario.valid);
   

    if(this.formulario.valid){

      this.algo1="foi"

      this.nav.navigate(["login"])

    }else{

      this.algo1="falta"

    }
     
  }

}
