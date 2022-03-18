import { ChangeContext, LabelType, Options } from '@angular-slider/ngx-slider';
import { DatePipe } from '@angular/common';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component } from '@angular/core';
import { LimitDataModel, SliderTickEventArgs, SliderTooltipEventArgs, SliderType, TicksDataModel, TooltipDataModel } from '@syncfusion/ej2-angular-inputs';
import * as moment from 'moment';
export interface days {
  days: string;
  
}
export interface hours {
  hours: string;
  
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schedules';
  selectedItem = null;
  documents: any[] = [];
  selected: any[] = [];
  endTime:any
  durationInMinutes:any
  startTime = '00:00';
  time: any;
  date: any;
  klo:any
  dateString:any
  newvalue:any
 
  ngOnInit() {
   
    //this.minValue = moment(this.minValue, 'HH:mm').format('HH:mm');
   this.dateString = moment.unix(this.minValue).format("HH:mm");
   // var day = moment(this.minValue);
    console.log(this.dateString)
  }

  start: any = 43200000 ; // start time in milli Seconds
  end: any = 86400000;  // end time in milli Seconds
  
  minValue = this.start
  maxValue: number = this.end;

  options: Options = {
    floor: this.start,
    ceil: this.end,
   
    translate: (value: number, label: LabelType): string => {
      return new Date(value).toTimeString(); // this will translate label to time stamp.
    
    }

    
  };

 
}








