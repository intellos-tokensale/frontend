import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class SessionService {

  private sessionId: any;
  private language: any;
  constructor(private http: HttpClient) {}

  set(sessionid: any) {
    this.sessionId = sessionid;
  }

  get() {
    return this.sessionId;
  }

  setLanguage(language: any) {
    this.language = language;
  }

  getlanguage() {
    return this.language;
  }

}
