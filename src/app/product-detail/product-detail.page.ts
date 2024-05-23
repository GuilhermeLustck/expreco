import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Simulação de dados do produto
    this.product = {
      id: this.route.snapshot.paramMap.get('id'),
      name: 'Produto Exemplo',
      imageUrl: 'https://via.placeholder.com/150',
      price: 199.99,
      description: 'Esta é a descrição do produto exemplo. Ele é incrível e você vai adorá-lo!',
      category: 'Eletrônicos',
      availability: true
    };
  }

  addToCart() {
    console.log(`${this.product.name} adicionado ao carrinho!`);
  }

}
