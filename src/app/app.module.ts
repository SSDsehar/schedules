import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DragToSelectModule } from 'ngx-drag-to-select';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { Ng5SliderModule } from 'ng5-slider';
@NgModule({
  declarations: [
    AppComponent,
    TimeComponent
  ],
  imports: [
    Ng5SliderModule,
    SliderModule,
    BrowserModule,
    NgxSliderModule,
    AppRoutingModule,
    FormsModule,
    DragToSelectModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
