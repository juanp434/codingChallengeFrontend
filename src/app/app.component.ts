import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filter: string;

  reciveFilter($event){  //recive data from sidebarComponent and send it to cardsComponent
    this.filter = $event;
    console.log(this.filter);
  }
  
}
