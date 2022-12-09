import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngApp';
  lat: number = 52.673858;
  lng: number = 7.815982;

  //slot calculation

  //As discussed earlier, the requirement was a user will be charged a fee of 20
  //if he parks for an hour, and 10 if he has parked for 30 mins or crossed an hour
  //Suppose consider that a user has parked his vehicle for 3.25 hours, which roughly translates to 3 hours
  // and 15 minutes.
  minutes = 3.25 * 60 - Math.round(3.25) * 60; // This is done for knowing the exact minutes the user has parked
  hours = Math.round(3.25);
  cost = this.hours * 20 + Math.ceil(this.minutes / 30) * 10;
}
