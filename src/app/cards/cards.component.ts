import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Array<any>;
  
  constructor(
    private cardService: CardsService
  ) { 
    
  }

  ngOnInit() {
    this.cardService.getAllCards().subscribe(data => {
      this.cards = data;
    });
    
  }

}
