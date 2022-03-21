import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toHourFormat'})
export class SecondToHourPipe implements PipeTransform {
  transform(value: number): string {
     let hours = Math.floor(value/3600);
     let minutes = Math.floor((value -(hours*3600))/60);
     let stgHours = hours < 10 ? "0" + hours : hours;
     let stgMinutes = minutes < 10 ? "0" + minutes : minutes;
     return stgHours+":"+stgMinutes;
  }
}