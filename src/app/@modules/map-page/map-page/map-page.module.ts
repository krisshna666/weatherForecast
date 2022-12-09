import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './map-page.component';
import { MapPageRoutingModule } from './map-page-routing.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoordServicesService } from 'src/app/@service/coord-services/coord-services.service';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [MapPageComponent],
  imports: [
    CommonModule,
    MapPageRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTAf8qHlQkf0-kdhBIPaJk0b7rw6wJtW8',
    }),
  ],
  providers: [CoordServicesService],
})
export class MapPageModule {}
