import { Component, OnInit } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { RateService } from '../../services/rate.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html'
})
export class InvestmentComponent implements OnInit {

  tokenAmount: any = 0;
  intervall: any;
  BTCaddress: any;
  ETHaddress: any;

  BTCrate: any;
  ETHrate: any;
  dollarRate: any;
  active: any = 'ETH';

  constructor(private rateService: RateService, private accountService: AccountService) { }

  ngOnInit() {


    this.intervall =  TimerObservable.create(0, 1000 * 20);
    this.accountService.getAccount()
    .subscribe((data) => {
      this.BTCaddress = data.btcAddress;
      this.ETHaddress = data.ethAddress;
    });

    this.intervall.subscribe(() => {
      this.rateService.getPrice()
        .subscribe((price: any) => {
          this.BTCrate = price.btcDollarPrice * price.dollarPrice;
          this.ETHrate =  price.ethDollarPrice * price.dollarPrice;
          this.dollarRate = price.dollarPrice;
        });
    });

  }

}
