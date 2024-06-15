import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiCepService {

  constructor(private http:HttpClient) { }
  cep:any

  async getCep(){

    this.cep = localStorage.getItem("cep")

    return await this.http.get(`http://viacep.com.br/ws/${this.cep}/json/`)

  }

}
