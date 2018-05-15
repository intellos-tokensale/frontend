import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../../../services/investment.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html'
})
export class InvestmentListComponent implements OnInit {

  transacitons: any = [];

  totalTokens: any = 0;

  constructor(private investmentService: InvestmentService) {
  }

  ngOnInit() {

    this.investmentService.getTransactions()
    .subscribe((data: any) => {
      this.transacitons = data;
    });
    this.investmentService.getTotalTokens()
    .subscribe((totalTokens: any) => {
      this.totalTokens = totalTokens.tokens;
    });
  }

}
