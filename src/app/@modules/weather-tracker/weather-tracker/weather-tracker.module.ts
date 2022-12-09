import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { WeatherTrackerRoutingModule } from './weather-tracker-routing.module';
import { WeatherTrackerComponent } from './weather-tracker.component';

@NgModule({
  declarations: [WeatherTrackerComponent],
  imports: [CommonModule, WeatherTrackerRoutingModule, NgxSpinnerModule],
})
export class WeatherTrackerModule {}
