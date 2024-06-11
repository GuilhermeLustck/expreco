import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  cont:any

  constructor() { }

  get(){

    this.cont=[
        {
            "id": 1,
            "descrição": "Produto de alta qualidade",
            "valor": 29.99,
            "nome": "João",
            "produto": "Camiseta"
        },
        {
            "id": 2,
            "descrição": "Ferramenta útil para casa",
            "valor": 15.50,
            "nome": "Maria",
            "produto": "Martelo"
        },
        {
            "id": 3,
            "descrição": "Dispositivo tecnológico avançado",
            "valor": 499.99,
            "nome": "Carlos",
            "produto": "Smartphone"
        },
        {
            "id": 4,
            "descrição": "Eletrodoméstico eficiente",
            "valor": 220.00,
            "nome": "Ana",
            "produto": "Liquidificador"
        },
        {
            "id": 5,
            "descrição": "Material escolar completo",
            "valor": 12.00,
            "nome": "Pedro",
            "produto": "Caderno"
        },
        {
            "id": 6,
            "descrição": "Peça de vestuário confortável",
            "valor": 45.00,
            "nome": "Sofia",
            "produto": "Calça"
        },
        {
            "id": 7,
            "descrição": "Jogo de panelas durável",
            "valor": 150.00,
            "nome": "Lucas",
            "produto": "Panela"
        },
        {
            "id": 8,
            "descrição": "Acessório de moda elegante",
            "valor": 25.00,
            "nome": "Laura",
            "produto": "Colar"
        },
        {
            "id": 9,
            "descrição": "Livro inspirador",
            "valor": 35.00,
            "nome": "Miguel",
            "produto": "Livro"
        },
        {
            "id": 10,
            "descrição": "Gadget inovador",
            "valor": 199.99,
            "nome": "Lívia",
            "produto": "Tablet"
        },
        {
            "id": 11,
            "descrição": "Artigo esportivo",
            "valor": 79.99,
            "nome": "Rafael",
            "produto": "Tênis"
        },
        {
            "id": 12,
            "descrição": "Decoração para casa",
            "valor": 40.00,
            "nome": "Gabriela",
            "produto": "Vaso"
        },
        {
            "id": 13,
            "descrição": "Alimento saudável",
            "valor": 10.00,
            "nome": "Bruno",
            "produto": "Granola"
        },
        {
            "id": 14,
            "descrição": "Brinquedo divertido",
            "valor": 25.00,
            "nome": "Alice",
            "produto": "Boneca"
        },
        {
            "id": 15,
            "descrição": "Equipamento de cozinha",
            "valor": 60.00,
            "nome": "Fernando",
            "produto": "Batedeira"
        },
        {
            "id": 16,
            "descrição": "Produto de beleza",
            "valor": 55.00,
            "nome": "Isabela",
            "produto": "Perfume"
        },
        {
            "id": 17,
            "descrição": "Artigo de escritório",
            "valor": 8.00,
            "nome": "Juliana",
            "produto": "Caneta"
        },
        {
            "id": 18,
            "descrição": "Equipamento eletrônico",
            "valor": 350.00,
            "nome": "Ricardo",
            "produto": "Monitor"
        },
        {
            "id": 19,
            "descrição": "Jogo educativo",
            "valor": 50.00,
            "nome": "Eduardo",
            "produto": "Quebra-cabeça"
        },
        {
            "id": 20,
            "descrição": "Acessório de viagem",
            "valor": 100.00,
            "nome": "Mariana",
            "produto": "Mala"
        }
    ]
    
    
    
    return this.cont
  }
}
