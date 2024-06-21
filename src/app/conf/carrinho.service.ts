import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  cont:any
  carrinho:any[]=[]

  vari:any

  
  constructor() { }


  get(){

    this.cont=[
        {
          "id": 1,
          "nome": "Camiseta",
          "valor": 29.99,
          "descricao": "Camiseta básica de algodão",
          "categoria": "Roupas",
          "temEmEstoque": true
        },
        {
          "id": 2,
          "nome": "Calça Jeans",
          "valor": 79.99,
          "descricao": "Calça jeans slim fit",
          "categoria": "Roupas",
          "temEmEstoque": false
        },
        {
          "id": 3,
          "nome": "Tênis Esportivo",
          "valor": 129.99,
          "descricao": "Tênis para corrida leve",
          "categoria": "Calçados",
          "temEmEstoque": true
        },
        {
          "id": 4,
          "nome": "Mochila",
          "valor": 59.99,
          "descricao": "Mochila escolar resistente",
          "categoria": "Acessórios",
          "temEmEstoque": true
        },
        {
          "id": 5,
          "nome": "Livro - Aventura",
          "valor": 19.99,
          "descricao": "Livro de ficção para jovens",
          "categoria": "Livros",
          "temEmEstoque": true
        },
        {
          "id": 6,
          "nome": "Bola de Futebol",
          "valor": 39.99,
          "descricao": "Bola oficial de futebol",
          "categoria": "Esportes",
          "temEmEstoque": false
        },
        {
          "id": 7,
          "nome": "Panela de Pressão",
          "valor": 89.99,
          "descricao": "Panela de pressão inox",
          "categoria": "Utensílios Domésticos",
          "temEmEstoque": true
        },
        {
          "id": 8,
          "nome": "Celular Smartphone",
          "valor": 699.99,
          "descricao": "Smartphone com câmera de alta resolução",
          "categoria": "Eletrônicos",
          "temEmEstoque": true
        },
        {
          "id": 9,
          "nome": "Fone de Ouvido Bluetooth",
          "valor": 49.99,
          "descricao": "Fone de ouvido sem fio",
          "categoria": "Eletrônicos",
          "temEmEstoque": true
        },
        {
          "id": 10,
          "nome": "Cadeira de Escritório",
          "valor": 149.99,
          "descricao": "Cadeira ergonômica para escritório",
          "categoria": "Móveis",
          "temEmEstoque": false
        },
        {
          "id": 11,
          "nome": "Caneca Personalizada",
          "valor": 9.99,
          "descricao": "Caneca com estampa personalizada",
          "categoria": "Utensílios Domésticos",
          "temEmEstoque": true
        },
        {
          "id": 12,
          "nome": "Relógio de Pulso",
          "valor": 99.99,
          "descricao": "Relógio de pulso analógico",
          "categoria": "Acessórios",
          "temEmEstoque": true
        },
        {
          "id": 13,
          "nome": "Laptop",
          "valor": 1299.99,
          "descricao": "Laptop leve e potente",
          "categoria": "Eletrônicos",
          "temEmEstoque": false
        },
        {
          "id": 14,
          "nome": "Sapatênis",
          "valor": 59.99,
          "descricao": "Calçado casual masculino",
          "categoria": "Calçados",
          "temEmEstoque": true
        },
        {
          "id": 15,
          "nome": "Câmera Fotográfica",
          "valor": 299.99,
          "descricao": "Câmera digital compacta",
          "categoria": "Eletrônicos",
          "temEmEstoque": false
        },
        {
          "id": 16,
          "nome": "Luminária de Mesa",
          "valor": 19.99,
          "descricao": "Luminária LED portátil",
          "categoria": "Iluminação",
          "temEmEstoque": true
        },
        {
          "id": 17,
          "nome": "Teclado sem Fio",
          "valor": 39.99,
          "descricao": "Teclado compacto para computador",
          "categoria": "Eletrônicos",
          "temEmEstoque": true
        },
        {
          "id": 18,
          "nome": "Carregador Portátil",
          "valor": 29.99,
          "descricao": "Carregador de celular com capacidade extra",
          "categoria": "Acessórios",
          "temEmEstoque": false
        },
        {
          "id": 19,
          "nome": "DVD - Filme Clássico",
          "valor": 9.99,
          "descricao": "DVD com filme clássico remasterizado",
          "categoria": "Filmes",
          "temEmEstoque": true
        },
        {
          "id": 20,
          "nome": "Máquina de Café",
          "valor": 149.99,
          "descricao": "Máquina de café expresso automática",
          "categoria": "Utensílios Domésticos",
          "temEmEstoque": true
        }
      ]
      
    return this.cont
  }

  divOBJ(id:number){
    const ID=id-1

    return this.cont[ID]
  }

  addCar(id:number){
    this.vari=localStorage.getItem("carrinho")
   

    if( this.vari !== null ){
      this.carrinho=JSON.parse(this.vari)
    }
      this.carrinho.push(this.cont[id-1])

      localStorage.setItem("carrinho",JSON.stringify(this.carrinho))
      
      return this.carrinho
    
  }

  getCar(){
   
    
    return localStorage.getItem("carrinho")
  }

  
}
