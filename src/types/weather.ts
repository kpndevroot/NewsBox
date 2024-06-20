// src/types/weather.ts
export interface WeatherData {
  timezone: string;
  sys: {
    sunrise: number;
    sunset: number;
  };
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    feels_like: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
}
export interface WeatherInfo {
  timezone: string;
  sunrise: number;
  sunset: number;
  temp: number;
  pressure: number;
  humidity: number;
  windspeed: number;
  maininfo: string;
  description: string;
}
