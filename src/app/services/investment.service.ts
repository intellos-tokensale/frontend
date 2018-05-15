
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';




@Injectable()
export class InvestmentService {

  private httpOptions;

  constructor(private http: HttpClient, private sessionService: SessionService) {
    this.httpOptions = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + this.sessionService.get(),
      })
    };
  }

  getTransactions() {
    return this.http.get('http://localhost:3000/api/accounts/transactions', this.httpOptions);
  }

  getTotalTokens() {
    return this.http.get('http://localhost:3000/api/accounts/tokenamount', this.httpOptions);
  }


  getDiscount() {
    return new Promise((resolve, reject) => {
      resolve(0.1);
    });
  }


}
