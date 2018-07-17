import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';
import { ConfigService } from './config.service';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient,
                private configService: ConfigService,
                private sessionService: SessionService) { }

    login(email: string, password: string) {
        return this.http.post<any>(this.configService.getConfig('server') + '/api/accounts/login',
        { email: email, password: password })
            .pipe(map( (authToken: any) => {
              console.log(authToken);
                // login successful if there's a jwt token in the response
                if (authToken && authToken.accessToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(authToken));
                    localStorage.setItem('authToken', JSON.stringify(authToken.accessToken));
                    console.log('setting storage', JSON.stringify(authToken));
                    console.log('setting storage',  JSON.stringify(authToken.accessToken));

                }
                return authToken;
            }));
    }

    resetPw(email: string) {
      return this.http.post<any>(this.configService.getConfig('server') + '/api/accounts/resetpw', { email });
    }

    confirmEmail(code: string) {
      return this.http.get<any>(this.configService.getConfig('server') + '/api/accounts/confirmEmail/' + code);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('authToken');
    }
}
