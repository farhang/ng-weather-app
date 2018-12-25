import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenWeatherMapService } from './services/open-weather-map.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [OpenWeatherMapService],
})
export class CoreModule { }
