import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-ethrefund-address',
  templateUrl: './ethRefund-address.component.html'
})
export class ETHRefundAddressComponent implements OnInit {
  ethRefundAddress: any;
  _show: any = '';

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.ethRefundAddress = this.accountService.getAccount()
    .subscribe(data => {
      this.ethRefundAddress = data.ethRefundAddress;
    });
  }

  save() {
    this.accountService.saveETHRefundAddress(this.ethRefundAddress)
    .subscribe((data: any) => { this.ethRefundAddress = data.ethRefundAddress; });
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
