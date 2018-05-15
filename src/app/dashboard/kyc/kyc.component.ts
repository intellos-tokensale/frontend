import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html'
})
export class KycComponent implements OnInit {

  kycDone: any =  true;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccount()
    .subscribe(account => this.kycDone = account.kyc);
  }

}
