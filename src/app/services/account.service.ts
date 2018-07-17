
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';
import { ConfigService } from './config.service';




@Injectable()
export class AccountService {

  private obs: any;
  private httpOptions;

  constructor(private http: HttpClient,
    private configService: ConfigService,
    private sessionService: SessionService) {
  }

  getAccount(): Observable<any>  {
    return this.http.get(this.configService.getConfig('server') + '/api/accounts', this.getHeaders());
  }

  register( user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.configService.getConfig('server') + '/api/accounts/register',
     user, httpOptions);
  }

  saveErc20( erc20: any): Observable<ArrayBuffer> {
    return this.http.post(this.configService.getConfig('server') + '/api/accounts/erc20',
      {erc20Address: erc20}, this.getHeaders());
  }

  changePw( password: string): Observable<ArrayBuffer> {
    return this.http.post(this.configService.getConfig('server') + '/api/accounts/changepw',
      {password}, this.getHeaders());
  }

  saveETHRefundAddress( ethRefundAddress: any): Observable<ArrayBuffer> {
    return this.http.post(this.configService.getConfig('server') + '/api/accounts/ethRefundAddress',
      {ethRefundAddress: ethRefundAddress}, this.getHeaders());
  }

  saveBTCRefundAddress( btcRefundAddress: any): Observable<ArrayBuffer> {
    return this.http.post(this.configService.getConfig('server') + '/api/accounts/btcRefundAddress',
      {btcRefundAddress: btcRefundAddress}, this.getHeaders());
  }

  extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private getHeaders(): any {
    return {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + this.sessionService.get(),
      })
    };
  }

}
