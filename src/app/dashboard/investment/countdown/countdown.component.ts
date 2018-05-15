import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { DatePipe } from '@angular/common';
import { RateService } from '../../../services/rate.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html'
})
export class CountdownComponent implements OnInit {

  discount: any;
  endDate: any;
  time: any;
  timer: any;

  days: any;
  houers: any;
  minutes: any;
  seconds: any;


  constructor(private rateService: RateService) { }

  ngOnInit() {


    this.timer = Observable.interval(1000);



    this.rateService.getPrice()
    .subscribe((d: any) => {
      console.log(d);
      this.discount = Math.floor(d.discount * 100);
      this.endDate = new Date(d.discountUntil);
      this.time = Math.floor((this.endDate.getTime() - Date.now()));
      this.days = Math.floor( this.time / 60 / 60 / 24 / 1000);

      this.timer.subscribe((x) => {
        this.time -= 1000;

        this.days = Math.floor( this.time / 60 / 60 / 24 / 1000);

        if ( this.time === 0 ) {
          this.timer.unsubscribe();
        }
      });
    });
}

}
