import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NouiFormatter, NouisliderComponent } from 'ng2-nouislider';
export class TimeFormatter implements NouiFormatter {
  to(value: number): string {
    let h = Math.floor(value / 3600);
    let m = Math.floor(value % 3600 / 60);
    let s = value - 60 * m - 3600 * h;
    let values = [h, m];
    let timeString: string = '';
    let i = 0;
    for (let v of values) {
      if (values[i] < 10)
        timeString += '0';
      timeString += values[i].toFixed(0);
      if (i < 1) {
        timeString += ':';
      }
      i++;
    }
    return timeString;
  };

  from(value: string): number {
    let v = value.split(':').map(parseInt);
    let time: number = 0;
    time += v[0] * 3600;
    time += v[1] * 60;
    time += v[2];
    return time;
  }
}


export class PipsFormatter implements NouiFormatter {
  to(value: number): string {
    let h = Math.floor(value / 3600);
    let hourString: string = '';
    if (h < 10) {
      hourString += '0';
    }
    hourString += h;
    return hourString;
  }

  from(value: string): number {
    let v = value.split(':').map(parseInt);
    let time: number = 0;
    time += v[0] * 3600;
    time += v[1] * 60;
    time += v[2];
    return time;
    
  }
}
@Component({
  selector: 'app-time-slider-simple',
  templateUrl: './time-slider-simple.component.html',
  styleUrls: ['./time-slider-simple.component.css']
})

export class TimeSliderSimpleComponent implements OnInit,OnChanges{

  @ViewChild('slider')
  public slider!: NouisliderComponent;
  @Input()
  public min!: string;
  @Input()
  public max!: string;
  @Input()
  public modifiable!: boolean;
  public timeCreneau: number[] = [];
  ngOnInit() {
    console.log("TimeSliderSimpleComponent - modifiable : "+this.modifiable);
    this.timeCreneau = [this.secondsFromTime(this.min), this.secondsFromTime(this.max)];
  }

  ngOnChanges(){
    
  }

  creneau1ON = new Date(1970, 1, 1, 6, 0);
  creneau1OFF = new Date(1970, 1, 1, 12, 0);
  creneau2ON = new Date(1970, 1, 1, 14, 0);
  creneau2OFF = new Date(1970, 1, 1, 20, 0);

  
  public updateCreneauON(value: string){
    this.timeCreneau[0] = this.secondsFromTime(value);
    this.slider.slider.set(this.timeCreneau);
  }

  public updateCreneauOFF(value: string){
    this.timeCreneau[1] = this.secondsFromTime(value);
    this.slider.slider.set(this.timeCreneau);
  }

  

  timeFromSeconds(value: number): string {
    let h = Math.floor(value / 3600);
    let m = Math.floor(value % 3600 / 60);
    let s = value - 60 * m - 3600 * h;
    let values = [h, m];
    let timeString: string = '';
    let i = 0;
    for (let v of values) {
      if (values[i] < 10)
        timeString += '0';
      timeString += values[i].toFixed(0);
      if (i < 1) {
        timeString += ':';
      }
      i++;
    }
    return timeString;
  };

  secondsFromTime(value: string): number {
    let v = value.split(':');
    let time: number = 0;
    time += (parseInt(v[0]) * 3600);
    time += (parseInt(v[1])* 60);
    return time;
  }


  public someTimeConfig: any = {
    connect: [false, true, false],
    padding: [0, 60],
    behaviour: 'drag-tap',
    range: {
      min: 0,
      max: 86400
    },
    tooltips: [new TimeFormatter(), new TimeFormatter()],
    step: 60,
    pips: {
      mode: 'count',
      values: 25,
      format: new PipsFormatter()
    },
    keyboard: true
  };

  name = 'Angular 5';

}
