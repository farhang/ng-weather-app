import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class OpenWeatherMapService {
  constructor(private httpClient: HttpClient) {}

  public baseUrl = `http://api.openweathermap.org/data/2.5/`;

  /**
   * Get current weather data.
   * @return weather Object.
   * @link https://openweathermap.org/api | More info
   */
  public getWeather(
    options: OpenWeatherMapRequest
  ): Observable<OpenWeatherMapCurrentWeatherResponse> {
    let getParams = '';
    if (environment.mock) {
      return this.httpClient.get<OpenWeatherMapCurrentWeatherResponse>(
        '/app/core/mocks/open-weather-map-mock-weather.json'
      );
    } else {
      getParams = this.convertObjectToApiParams(options);
    }
    return this.httpClient.jsonp<OpenWeatherMapCurrentWeatherResponse>(
      `${this.baseUrl}weather?APPID=${environment.apiKey}&${getParams}`,
      'callback'
    );
  }

  /**
   * get 5 day / 3 hour forecast.
   * @return forecast Object.
   * @link https://openweathermap.org/api | More info
   */
  public getForecast(
    options: OpenWeatherMapRequest
  ): Observable<OpenWeatherMapForecastResponse> {
    let getParams = '';
    if (environment.mock) {
      return this.httpClient.get<OpenWeatherMapForecastResponse>(
        '/app/core/mocks/open-weather-map-mock-forecast.json'
      );
    } else {
      getParams = this.convertObjectToApiParams(options);
    }
    return this.httpClient.jsonp<OpenWeatherMapForecastResponse>(
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
      params +=
        Object.keys(options).length === i + 1
          ? `${key}=${options[key]}`
          : `${key}=${options[key]}&`;
    });
    return params;
  }
}

export interface OpenWeatherMapRequest {
  id?: number;
  q?: string;
  lat?: number;
  lon?: number;
  zip?: number;
  units?: 'imperial' | 'metric';
  lang?: string;
}

export interface OpenWeatherMapCurrentWeatherResponse {
  base: string;
  clouds: object;
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  visibility: number;
  weather: [{
    id: number;
    main: string;
    description: string;
    icon: string;
  }];
  wind: { speed: number; deg: number };
}

export interface OpenWeatherMapForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: [OpenWeatherMapForecastResponseElement];
}


export interface OpenWeatherMapForecastResponseElement {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  sys: {
    pod: string;
  };
  weather: [{ id: number; main: string; description: string; icon: string }];
  wind: { speed: number; deg: number };
  snow: {};
}
