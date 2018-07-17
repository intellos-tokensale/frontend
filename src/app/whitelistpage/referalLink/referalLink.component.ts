import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-referallink',
  templateUrl: './referalLink.component.html'
})
export class ReferalLinkComponent implements OnInit {
  referalCode: any;
  referalLink: string;
  _show: any = '';

  constructor(private accountService: AccountService,
              private configService: ConfigService) { }

  ngOnInit() {
    this.accountService.getAccount()
    .subscribe(data => {
      this.referalCode = data.referalCode;
      this.referalLink = this.configService.getConfig('frontend') + '/register?referedByCode=' + this.referalCode;
    });
  }


}
