import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  cards : any;
  constructor(private cardService: CardsService) { }

  ngOnInit() {
    //this.cards = this.cardService.getAllCards();
  }


}
