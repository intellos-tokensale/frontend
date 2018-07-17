
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';
import { ConfigService } from './config.service';




@Injectable()
export class InvestmentService {

  private httpOptions;

  constructor(private http: HttpClient,
              private configService: ConfigService,
              private sessionService: SessionService) {
    this.httpOptions = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + this.sessionService.get(),
      })
    };
  }

  getTransactions() {
    return this.http.get(this.configService.getConfig('server') + '/api/accounts/transactions', this.httpOptions);
  }

  getTotalTokens() {
    return this.http.get(this.configService.getConfig('server') + '/api/accounts/tokenamount', this.httpOptions);
  }


  getDiscount() {
    return new Promise((resolve, reject) => {
      resolve(0.1);
    });
  }


}
