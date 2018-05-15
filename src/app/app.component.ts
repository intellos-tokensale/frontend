import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public translate: TranslateService, private activatedRoute: ActivatedRoute, private sessionService: SessionService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        let lang = params['lang'];
        if (!lang) {
          lang = this.translate.getBrowserLang();
        }
        const defLang =  lang.match(/en|fr/) ? lang : 'en';
        this.translate.use(defLang);
        this.sessionService.setLanguage(defLang);

        const sessionID = params['sessionid'];
        this.sessionService.set(sessionID);
      });
  }



}
