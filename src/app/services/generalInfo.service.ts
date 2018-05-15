import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';
import { DomSanitizer } from '@angular/platform-browser';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class GeneralInfoService {

   //  this.http.get('http://localhost:8080/api/investments/' + sessionid)
    //  .subscribe((data) => {
    //     resolve(data);
    //   });

  constructor(private sanitizer: DomSanitizer, http: HttpClient, private sessionService: SessionService) {}


  getInfo() {
    return new Promise((resolve, reject) => {
      let o: any = 'this is a general message <strong>for all of you!</strong>';
      // let o: any = '';
      if ( o ) {
        o = this.sanitizer.bypassSecurityTrustHtml(o);
      } else {
        o = null;
      }
      resolve(o);
    });
  }

}
