import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-btcrefund-address',
  templateUrl: './btcRefund-address.component.html'
})
export class BTCRefundAddressComponent implements OnInit {
  btcRefundAddress: any;
  _show: any = '';

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.btcRefundAddress = this.accountService.getAccount()
    .subscribe(data => {
      this.btcRefundAddress = data.btcRefundAddress;
    });
  }

  save() {
    this.accountService.saveBTCRefundAddress(this.btcRefundAddress)
    .subscribe((data: any) => { this.btcRefundAddress = data.btcRefundAddress; });
    this._show = '';
  }


  setShow(str) {
    if (this._show === str) {
        this._show = '';
    } else {
      this._show = str;
    }

  }

  show(str) {
    return this._show === str;
  }


}
