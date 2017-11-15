import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DashboardDataService {
  click: boolean = true;
  private subject = new Subject<any>();

  constructor() { }

  setClicked(){
    this.click = !this.click;
    this.subject.next(this.click);
  }

  getClicked(): Observable<any> {
    return this.subject.asObservable();
  }

}
