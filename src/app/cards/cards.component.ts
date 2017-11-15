import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CardsService } from '../services/cards.service';
import { DashboardDataService } from '../services/dashboard-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Array<any>;
  click: boolean = true;
  subscription: Subscription;

  constructor(
    private cardService: CardsService,
    private data: DashboardDataService
  ) { 
    this.subscription = this.data.getClicked().subscribe(click => { this.click = click;});
  }

  ngOnInit() {
    this.cardService.getAllCards().subscribe(data => {
      this.cards = data;
    });

    

  }

}
