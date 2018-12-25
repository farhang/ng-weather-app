import { getTestBed, TestBed } from '@angular/core/testing';
import { OpenWeatherMapService } from './open-weather-map.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Weather } from '../models/weather';
import { Forecast } from '../models/forecast';

describe('OpenWeatherMapService', () => {
  let httpMock: HttpTestingController;
  let openWeatherMapService: OpenWeatherMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OpenWeatherMapService]
    });

    httpMock = getTestBed().get(HttpTestingController);
    openWeatherMapService = getTestBed().get(OpenWeatherMapService);
  });

  it('Should be created', () => {
    expect(openWeatherMapService).toBeTruthy();
  });

  it('should get the current weather', () => {
    const dummyCurrentWeather: Weather = {
      base: 'stations',
      clouds: { all: 0 },
      cod: 200,
      coord: { lon: 4.46, lat: 51.92 },
      dt: 1545057060,
      id: 2747891,
      main: { temp: 8.41, pressure: 1018, humidity: 87, temp_min: 8, temp_max: 9 },
      name: 'Rotterdam',
      sys: { type: 1, id: 1541, message: 0.0074, country: 'NL', sunrise: 1545032723, sunset: 1545060698 },
      visibility: 10000,
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
      wind: { speed: 6.2, deg: 250 }
    };

    openWeatherMapService.getWeather({ units: 'metric', q: 'Rotterdam' }).subscribe(res => {
      expect(res).toEqual(dummyCurrentWeather);
    });
  });

  it('should  get 5 next days per 3 hour forecast', () => {
    const dummyNextRecentWeather: Forecast = {
      cod: '200',
      message: 0.0247,
      cnt: 40,
      list: [
        {
          dt: 1544875200,
          main: {
            temp: 1.31,
            temp_min: 1.31,
            temp_max: 1.42,
            pressure: 1035.6,
            sea_level: 1035.6,
            grnd_level: 1035.6,
            humidity: 100,
            temp_kf: -0.11
          },
          weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
          clouds: { all: 0 },
          wind: {
            speed: 8.72,
            deg: 150.502
          },
          snow: {},
          sys: { pod: 'd' },
          dt_txt: '2018-12-15 12:00:00'
        }
      ]
    };

    openWeatherMapService.getForecast({ units: 'metric', q: 'Rotterdam' }).subscribe(res => {
      expect(res).toEqual(dummyNextRecentWeather);
    });
  });
});
