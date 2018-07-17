import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '../../services/account.service';
import { PasswordValidator } from '../../validators/password.validator';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({templateUrl: 'register.component.html'})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    referedByCode = '';
    JSON: any;

    constructor(
        private formBuilder: FormBuilder,
        private accountService: AccountService,
        private activatedRoute: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private router: Router) {
          this.referedByCode = this.activatedRoute.snapshot.queryParams['referedByCode'];
          this.JSON = JSON;
        }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            nationality: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), PasswordValidator.strong]],
            investmentAmount: ['', [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }

        const val = this.registerForm.value;
        val.referedByCode = this.referedByCode;
        this.loading = true;
        this.authenticationService.logout();
        this.accountService.register(val)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error('Registration Failed', true);
                    this.loading = false;
                });
    }
}
