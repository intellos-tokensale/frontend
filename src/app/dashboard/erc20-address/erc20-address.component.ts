import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-erc20-address',
  templateUrl: './erc20-address.component.html'
})
export class Erc20AddressComponent implements OnInit {
  erc20Address: any;
  _show: any = '';

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.erc20Address = this.accountService.getAccount()
    .subscribe(data => {
      this.erc20Address = data.erc20Address;
    });
  }

  save() {
    this.accountService.saveErc20(this.erc20Address)
    .subscribe((data: any) => { this.erc20Address = data.erc20Address; });
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
