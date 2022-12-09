import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoordServicesService {
  getCoords(place: string) {
    return this.http
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?proximity=ip&types=country`
      )
      .pipe(debounce(() => timer(10000)));
  }
  getCountriesAndStates() {
    return this.http.get(
      'https://krisshna666.github.io/weatherForecast/assets/countriesList.json'
    );
  }
  getWeatherDetails(city: string) {
    return this.http.get(
      `https://api.weatherapi.com/v1/current.json?q=${city}&aqi=no`
    );
  }
  getDailyWeatherForecast(city: string, params: any) {
    return this.http.get(
      `https://api.weatherapi.com/v1/forecast.json?q=${city}`,
      { params: params }
    );
  }
  constructor(private http: HttpClient) {}
}
