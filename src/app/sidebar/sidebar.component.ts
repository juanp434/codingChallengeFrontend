import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  cards : any;
  filter: string;
  radio: string;
  constructor(private cardService: CardsService) { }

  @Output() searchFilterEvent = new EventEmitter<string>();

  sendFilter(){
    this.searchFilterEvent.emit(this.filter);
  }
  
  ngOnInit() {
    
  }


}
