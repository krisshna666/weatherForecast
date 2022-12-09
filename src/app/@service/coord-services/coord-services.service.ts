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
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?proximity=ip&types=country&access_token=pk.eyJ1IjoibXVrdWwwNTk2IiwiYSI6ImNqdzF4empkczBvczkzenBzOWxpZTJrdzAifQ.skvI3yfkPhyRI9upXgU5tA`
      )
      .pipe(debounce(() => timer(10000)));
  }
  getCountriesAndStates() {
    return this.http.get('../../assets/countriesList.json');
  }
  getWeatherDetails(city: string) {
    return this.http.get(
      `http://api.weatherapi.com/v1/current.json?key=58e9336973e94619bc1100938220912&q=${city}&aqi=no`
    );
  }
  getDailyWeatherForecast(city: string, params: any) {
    return this.http.get(
      `https://api.weatherapi.com/v1/forecast.json?key=58e9336973e94619bc1100938220912&q=${city}`,
      { params: params }
    );
  }
  constructor(private http: HttpClient) {}
}
