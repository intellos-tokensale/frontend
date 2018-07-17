
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';
import { ConfigService } from './config.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class RateService {

  private httpOptions;

  constructor(private http: HttpClient,
              private configService: ConfigService,
              private sessionService: SessionService) {
    this.httpOptions = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json'
      })
    };
  }

  getPrice() {
    return this.http.get(this.configService.getConfig('server') + '/api/prices', this.httpOptions);
  }

}
