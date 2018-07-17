import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { AccountService } from '../../services/account.service';
import { PasswordValidator } from '../../validators/password.validator';

@Component({templateUrl: 'changepw.component.html'})
export class ChangePwComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
          password: ['', [Validators.required, Validators.minLength(6), PasswordValidator.strong]],
        });
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
        this.accountService.changePw(this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                    this.alertService.success('Password Changed', true);
                },
                error => {
                    console.log(error);
                    this.alertService.error('Password could not be changed', true);
                    this.loading = false;
                });
    }
}
