import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html'
})
export class TransactionComponent implements OnInit {
  _data: any = {};
  constructor() { }

  ngOnInit() {
  }

  @Input()
  set data(data) {
    this._data = data;
  }
}
