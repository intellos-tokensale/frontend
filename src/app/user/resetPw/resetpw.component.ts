﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';

@Component({templateUrl: 'resetpw.component.html'})
export class ResetPwComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });

        // reset login status
        this.authenticationService.logout();

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.resetPw(this.f.email.value)
            .pipe(first())
            .subscribe(
                data => {
                  this.alertService.success('Your password has been reset please check your mail', true);
                  this.router.navigate(['/']);
                },
                error => {
                    console.log(error);
                    this.alertService.error(error.error.message);
                    this.loading = false;
                });
    }
}
