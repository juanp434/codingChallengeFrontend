import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: String;
  
  constructor(private data : DashboardDataService) {
    this.logo = "../../assets/avalith.png";
   }

  ngOnInit() {
  }

  clicked(){
   this.data.setClicked();
  }

}
