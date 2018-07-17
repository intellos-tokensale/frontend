import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        const confirmationCode = this.route.snapshot.queryParams['confirmationCode'];
        if (confirmationCode) {
          this.authenticationService.confirmEmail(confirmationCode)
          .pipe(first())
          .subscribe(
              data => {
                this.alertService.success('Email Verified');
              },
              error => {
                  console.log(error);
                  this.alertService.error(error.error.message);
                  this.loading = false;
              });
          }
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Login sucessfull', true);
                    this.router.navigate(['/']);
                },
                error => {
                    console.log(error);
                    console.log('setting error!');
                    this.alertService.error('login failed: have you confirmed your email address?');
                    this.loading = false;
                });
    }
}
