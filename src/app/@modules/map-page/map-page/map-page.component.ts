import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CoordServicesService } from 'src/app/@service/coord-services/coord-services.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpParams } from '@angular/common/http';

export interface stateInterface {
  country: string;
  states: string[];
}
@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
})
export class MapPageComponent implements OnInit {
  zoom: number = 4;
  stateAndCountryForm!: FormGroup;
  countriesList: any[] = [];
  stateList: stateInterface[] = [];
  coordDetails: any[] = [];
  // initial center position for the map
  lat: number = 52.673858;
  lng: number = 7.815982;
  getCoords(val: string) {
    let params = new HttpParams();
    params = params.append('types', 'country');
    this.getCoordService
      .getCoords(val, params)

      .subscribe((res: any) => {
        this.coordDetails = res.features.filter(
          (resp: { text: string; center: number[] }) => {
            if (resp.text.toLowerCase() === val) {
              this.lat = resp?.center[1];
              this.lng = resp?.center[0];
              setTimeout(() => {
                this.spinner.hide();
              }, 2000);
            }
          }
        );
        console.log(res);
      });
  }
  navigateToWeatherPage(country: string, state: string) {
    this.router.navigate([`${country}/${state}`]);
  }

  createFormControls() {
    this.stateAndCountryForm = this.fb.group({
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
    });
  }
  constructor(
    private getCoordService: CoordServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder
  ) {
    this.createFormControls();
  }
  get formControlValues() {
    return this.stateAndCountryForm.controls;
  }

  getStateList(countryValue: string) {
    console.log(countryValue);
    this.stateList = this.countriesList.filter((res) => {
      if (res.country.toLowerCase() == countryValue) {
        return res.states;
      }
    });
    console.log(this.stateList);
  }
  ngOnInit(): void {
    this.spinner.show();
    this.stateAndCountryForm.controls['country'].valueChanges.subscribe(
      (res) => {
        this.spinner.show();
        this.formControlValues.state.setValue(null);
        this.getCoords(res), this.getStateList(res);
      }
    );
    this.getCoordService
      .getCountriesAndStates()
      .subscribe(
        (res: any) => (
          (this.countriesList = res?.countries), this.spinner.hide()
        )
      );
  }
}
