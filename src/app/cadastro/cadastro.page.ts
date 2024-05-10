import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator,FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from '../conf/dados.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


  formulario: FormGroup = new FormGroup({});

  //abilita e desabilita o botão decadastramento
  status:boolean=false ;

  CPF:string=''
  Nome:string=''
  Email:string=''
  Senha:string=''
  Tel:string=''
  erro:string=''

  constructor( private Form:FormBuilder,private sev:DadosService,private rot:Router) { }

  ngOnInit(): void{
    
    this.formulario = this.Form.group({
      Nome: ['', [Validators.required,Validators.minLength(5)]],
      Email: ['', [Validators.required, Validators.email]],
      Senha: ['', [Validators.required]],
      CPF: ['', [Validators.required]],
      Tel: ['', [Validators.minLength(9), Validators.required]],
      
    });
  }

  algo(){

    //this.CPFi='123456879'
    //this.Nome='algo da silva'
    //this.Email='algo@gmail.com'
    //this.Senha='nadapornada'
    //this.Tel='147258369'
    

    console.log(this.formulario.valid)
    console.log(this.formulario)

    if(this.formulario.valid){

      this.erro="foi"
      
      this.sev.cadas({
        CEPi: this.CPF ,
        Nome: this.Nome,
        Email: this.Email,
        Senha: this.Senha,
        Tel: this.Tel,
      })
      this.rot.navigate(["Login"])

    }else{
      this.erro="falta"
    }
     
  }
}
