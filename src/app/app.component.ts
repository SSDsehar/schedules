import { ChangeContext, LabelType, Options } from '@angular-slider/ngx-slider';
import { DatePipe } from '@angular/common';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component } from '@angular/core';
import { LimitDataModel, SliderTickEventArgs, SliderTooltipEventArgs, SliderType, TicksDataModel, TooltipDataModel } from '@syncfusion/ej2-angular-inputs';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schedules';
  modification: boolean = true;
 
  ngOnInit() {
    this.modification = false;
  }
  name = 'Angular 5';
  public changerModeModification(){
    console.log("changerModeModification")
    this.modification= !this.modification;
    console.log(this.modification);
  }

 
}








