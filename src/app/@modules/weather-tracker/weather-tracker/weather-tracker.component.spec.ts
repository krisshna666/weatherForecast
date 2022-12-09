import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTrackerComponent } from './weather-tracker.component';

describe('WeatherTrackerComponent', () => {
  let component: WeatherTrackerComponent;
  let fixture: ComponentFixture<WeatherTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
