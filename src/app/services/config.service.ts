import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  private config: Object = null;

  constructor(private http: HttpClient) {}

  public getConfig(key: any) {
      return this.config[key];
  }

  public load() {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/config.json')
        .subscribe((responseData) => {
          this.config = responseData;
          console.log('we have the config data!', this.config);
          resolve(true);
        });
    });
  }
}
