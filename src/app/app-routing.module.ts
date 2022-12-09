import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'map',
    loadChildren: () =>
      import('./@modules/map-page/map-page/map-page.module').then(
        (m) => m.MapPageModule
      ),
  },
  {
    path: ':country/:state',
    loadChildren: () =>
      import(
        './@modules/weather-tracker/weather-tracker/weather-tracker.module'
      ).then((m) => m.WeatherTrackerModule),
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
