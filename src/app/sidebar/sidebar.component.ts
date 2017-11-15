import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DashboardDataService } from '../services/dashboard-data.service';
import {Observable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  cards : any;
  filter: string;
  radio: string;
  subscription: Subscription;
  click: boolean = true;

  constructor(private data : DashboardDataService) { 
    this.subscription = this.data.getClicked().subscribe(click => { this.click = click;});
  }

  ngOnInit() {
  }

}
