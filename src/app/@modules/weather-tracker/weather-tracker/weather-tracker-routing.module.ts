import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherTrackerComponent } from './weather-tracker.component';

const routes: Routes = [{ path: '', component: WeatherTrackerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherTrackerRoutingModule {}
