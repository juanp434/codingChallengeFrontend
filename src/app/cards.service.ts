import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CardsService {
  cards :Observable<any>;
  
  constructor(
    private http: Http
  ) {
  }
 
  public getAllCards(){
    return this.http.get("../../assets/cards.json")
                    .map((data) => data.json()
                    );
  }

  public searchCards(term: string) {
    return this.http.get('../../assets/cards.json')
    .map(res => res.json()
                .filter((term) => term.cardTitle > 2))
    .catch(err => Observable.throw(err));
  }

  


}
