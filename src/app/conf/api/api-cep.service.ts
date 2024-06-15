import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCepService {

  constructor(private http:HttpClient) { }
  cep:any

  getCep(){

    this.cep = localStorage.getItem("cep")

    this.http.get(`http://viacep.com.br/ws/${this.cep}/json/`)

  }

}
