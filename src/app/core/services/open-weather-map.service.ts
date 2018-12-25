import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Forecast } from '../models/forecast';
import { Weather } from '../models/weather';

@Injectable()
export class OpenWeatherMapService {
  constructor(private httpClient: HttpClient) {}

  public baseUrl = `http://api.openweathermap.org/data/2.5/`;

  /**
   * Get current weather data.
   * @return weather Object.
   * @link https://openweathermap.org/api | More info
   */
  public getWeather(options: OpenWeatherMapOptions): Observable<Weather> {
    let getParams = '';
    if (environment.mock) {
      return this.httpClient.get<Weather>('/assets/mocks/open-weather-map-mock-weather.json');
    } else {
      getParams = this.convertObjectToApiParams(options);
    }
    return this.httpClient.jsonp<Weather>(
      `${this.baseUrl}weather?APPID=${environment.apiKey}&${getParams}`,
      'callback'
    );
  }

  /**
   * get 5 day / 3 hour forecast.
   * @return forecast Object.
   * @link https://openweathermap.org/api | More info
   */
  public getForecast(options: OpenWeatherMapOptions): Observable<Forecast> {
    let getParams = '';
    if (environment.mock) {
      return this.httpClient.get<Forecast>('/assets/mocks/open-weather-map-mock-forecast.json');
    } else {
      getParams = this.convertObjectToApiParams(options);
    }
    return this.httpClient.jsonp<Forecast>(
      `${this.baseUrl}forecast?APPID=${environment.apiKey}&${getParams}`,
      'callback'
    );
  }

  /**
   * iterate over options and convert it to params format, on last object property doesn't insert '&' character.
   */
  private convertObjectToApiParams(options) {
    let params = '';
    Object.keys(options).map(function(key, i) {
      params += Object.keys(options).length === i + 1 ? `${key}=${options[key]}` : `${key}=${options[key]}&`;
    });
    return params;
  }
}

export interface OpenWeatherMapOptions {
  q: string;
  units: string;
}
