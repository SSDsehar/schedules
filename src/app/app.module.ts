import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DragToSelectModule } from 'ngx-drag-to-select';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { Ng5SliderModule } from 'ng5-slider';
import { TimeSliderSimpleComponent } from './time-slider-simple/time-slider-simple.component';
import { SecondToHourPipe } from './time-slider-simple/second-hour.pipe';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TimeComponent } from './time/time.component';
import { TestComponent } from './test/test.component';
import { NouisliderModule } from 'ng2-nouislider';
@NgModule({
  declarations: [
    AppComponent,
    TimeSliderSimpleComponent,
    SecondToHourPipe,
    TimeComponent,
    TestComponent
  ],
  imports: [
    Ng5SliderModule,
    SliderModule,
    BrowserModule,
    NgxSliderModule,
    AppRoutingModule,
    NouisliderModule,
    FormsModule,
    DragToSelectModule.forRoot()
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
