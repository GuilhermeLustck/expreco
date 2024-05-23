import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
   
  showCard = false;

  constructor() { }

  ngOnInit() {
  }
  
  toggleCard() {
    this.showCard = !this.showCard;
  }
}
