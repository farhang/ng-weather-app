export interface Weather {
  base: string;
  clouds: object;
  cod: number;
  coord: {lon: number, lat: number};
  dt: number;
  id: number;
  main: {temp: number, pressure: number, humidity: number, temp_min: number, temp_max: number};
  name: string;
  sys: {type: number, id: number, message: number, country: string, sunrise: number, sunset: number};
  visibility: number;
  weather: Array<{id: number, main: string, description: string, icon: string}>;
  wind: {speed: number, deg: number};
}
