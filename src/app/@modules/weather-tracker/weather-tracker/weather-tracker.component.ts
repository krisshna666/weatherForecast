import { HttpClient, HttpParams } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { CoordServicesService } from 'src/app/@service/coord-services/coord-services.service';

@Component({
  selector: 'app-weather-tracker',
  templateUrl: './weather-tracker.component.html',
  styleUrls: ['./weather-tracker.component.scss'],
})
export class WeatherTrackerComponent implements OnInit {
  selectedCity: string = '';

  @ViewChildren('nameItem')
  nameItems!: QueryList<ElementRef>;
  weatherDayDetail: any[] = [];
  currentWeatherDetails: any = {};
  getDailyWeatherForecast() {
    let params = new HttpParams();
    params = params.append('day', 1);
    this.weatherService
      .getDailyWeatherForecast(this.selectedCity, params)
      .subscribe((res: any) => {
        this.weatherDayDetail = res?.forecast?.forecastday[0]?.hour;

        console.log(res?.forecast?.forecastday[0]?.hour);
        console.log(res);
      });
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private weatherService: CoordServicesService,
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
    this.selectedCity = this.activatedRoute.snapshot.params['state'];
    this.weatherService
      .getWeatherDetails(this.selectedCity)
      .subscribe(
        (res) => ((this.currentWeatherDetails = res), this.spinner.hide())
      );
    this.getDailyWeatherForecast();
  }
  highlightReports(index: number) {
    this.nameItems.forEach((ele, ind) => {
      if (ind == index) {
        ele.nativeElement.style.backgroundColor = 'lightblue';
      } else {
        ele.nativeElement.style.background = 'none';
      }
    });
  }
  ngOnInit(): void {}
}
