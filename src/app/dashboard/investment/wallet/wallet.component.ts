import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { RateService } from '../../../services/rate.service';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html'
})
export class WalletComponent implements OnInit, OnDestroy {
  _baseAddress: any;
  _tokenSymbol: any;
  _currencySymbol: any;
  _qrcodePrefix: any;

  _BaseAmount: any ;
  _TokenAmount: any;
  _rate: any = 0.1;
  intervall: any;
  discount: any = 0;
  discountDispaly: any = 0;
  showCopied: any = false;

  constructor(private rateService: RateService, private accountService: AccountService) {}

  ngOnInit() {
    this.rateService.getPrice()
    .subscribe( (d: any) => {
      this.discount = d.discount * 1;
      this.discountDispaly = Math.floor( d.discount * 100);
    });
  }

  ngOnDestroy() {
    this.intervall.unsubscribe();
  }

  @Input()
  set rate(rate: string) {
    this._rate = rate;
    this._TokenAmount = this._BaseAmount * (this._rate * (1 + this.discount));
  }

  get rate() {
    return this._rate;
  }

  get baseAddress() {
    return this._baseAddress;
  }

  get tokenSymbol() {
    return this._tokenSymbol;
  }

  get currencySymbol() {
    return this._currencySymbol;
  }

  get qrcodePrefix() {
    return this._qrcodePrefix;
  }


  @Input()
  set baseAddress(baseAddress: string) {
    this._baseAddress = baseAddress;

  }

  @Input()
  set tokenSymbol(tokenSymbol: string) {
    this._tokenSymbol = tokenSymbol;

  }

  @Input()
  set currencySymbol(currencySymbol: string) {
    this._currencySymbol = currencySymbol;

  }

  @Input()
  set qrcodePrefix(qrcodePrefix: string) {
    this._qrcodePrefix = qrcodePrefix;
  }




  set BaseAmount(amount: string) {
    this._BaseAmount = amount;
    this._TokenAmount = this._BaseAmount * (this._rate * (1 + this.discount));
  }

  get BaseAmount() {
    return this._BaseAmount;
  }

  set TokenAmount(amount: string) {
    this._TokenAmount = amount;
    this._BaseAmount = this._TokenAmount / (this._rate * (1 + this.discount));

  }

  get TokenAmount() {
    return this._TokenAmount;
  }

  flashCopied() {

    this.showCopied = true;
    setTimeout(function() {
      this.showCopied = false;
    }.bind(this), 2000);
  }

}
