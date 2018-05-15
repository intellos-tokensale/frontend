import { Component, OnInit } from '@angular/core';
import { GeneralInfoService } from '../../services/generalInfo.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html'
})
export class GeneralInfoComponent implements OnInit {

  message: any;
  constructor(private generalInfo: GeneralInfoService) { }

  ngOnInit() {
     this.generalInfo.getInfo()
    .then((x) => {
        this.message = x;
    } );
  }

}
