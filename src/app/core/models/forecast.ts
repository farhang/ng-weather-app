export interface Forecast {
  cod: string;
  message: number;
  cnt: number;
  list: Array<{
    dt: number,
    main: {
      temp: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      sea_level: number,
      grnd_level: number,
      humidity: number,
      temp_kf: number},
    weather:
      [
        { id: number,
          main: string,
          description: string,
          icon: string
        }
        ],
    clouds: {'all': number},
    wind: {
      speed: number,
      deg: number
    },
    snow: {},
    sys: {'pod': string},
    dt_txt: string
  }>;
}
