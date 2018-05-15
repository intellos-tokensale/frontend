
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';




@Injectable()
export class AccountService {

  private obs: any;
  private httpOptions;

  constructor(private http: HttpClient, private sessionService: SessionService) {
    this.httpOptions = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + this.sessionService.get(),
      })
    };
    this.fetch();
  }

  fetch() {
    this.obs = this.http.get('http://localhost:3000/api/accounts', this.httpOptions);
  }

  refresh() {
    this.fetch();
  }

  getAccount() {
    return this.obs;
  }

  saveErc20( erc20: any): Observable<ArrayBuffer> {
    return this.http.post('http://localhost:3000/api/accounts/erc20', {erc20Address: erc20}, this.httpOptions);
  }

  saveETHRefundAddress( ethRefundAddress: any): Observable<ArrayBuffer> {
    return this.http.post('http://localhost:3000/api/accounts/ethRefundAddress', {ethRefundAddress: ethRefundAddress}, this.httpOptions);
  }

  saveBTCRefundAddress( btcRefundAddress: any): Observable<ArrayBuffer> {
    return this.http.post('http://localhost:3000/api/accounts/btcRefundAddress', {btcRefundAddress: btcRefundAddress}, this.httpOptions);
  }

  extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

}
