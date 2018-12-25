import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenWeatherMapService } from './services/open-weather-map.service';
import { ErrorHandlingService } from './services/error-handling.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    OpenWeatherMapService,
    ErrorHandlingService,
  ],
})
export class CoreModule { }
