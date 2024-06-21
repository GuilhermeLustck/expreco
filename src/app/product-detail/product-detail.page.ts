import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from '../conf/carrinho.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product: any;
  prod:any
  id:any
  constructor(private route: ActivatedRoute,private dados:CarrinhoService,private rot:Router) { }

  ngOnInit() {
    // Simulação de dados do produto
    this.id=this.route.snapshot.paramMap.get('id')
    this.prod=this.dados.divOBJ(Number(this.id))
    
    this.product = {
      id: this.id,
      name: this.prod.nome,
      imageUrl: 'https://via.placeholder.com/150',
      price: this.prod.valor,
      description: this.prod.descrição,
      category: this.prod.categoria,
      availability: this.prod.temEmEstoque
    };
  }
  
  addToCart() {
   
   let res= this.dados.addCar(Number(this.id))
    console.log(res,"add carrinho")
    
  }
  voltar(){
    this.rot.navigate(["menu"])
  }
}
