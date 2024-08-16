export interface WeatherData {
  city: string;
  country: string;
  weather: string;
  description: string;
  currTemp: number;
  maxTemp: number;
  minTemp: number;
  humidity: number;
  systemDate: Date;
  queryDate: Date;
}
