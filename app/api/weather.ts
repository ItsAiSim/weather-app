import axios from "axios";
import { WeatherData } from "../models/weather.ts";
import { NotFoundError } from "../models/errors.ts";

interface CitySearch {
  name: string;
  local_names: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

interface WeatherSearch {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export async function getWeather(
  city: string
): Promise<WeatherData | NotFoundError> {
  try {
    const cities = await axios.get<Array<CitySearch>>(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=e667961b7fe657220d76d5cea0919796`
    );
    const cityData = cities.data[0];
    if (!cityData) {
      return {
        status: 404,
        message: "Country/City Not Found!",
      };
    }
    const weather = await axios.get<WeatherSearch>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&appid=e667961b7fe657220d76d5cea0919796`
    );
    const weatherData = weather.data;
    return {
      city: cityData.name,
      country: cityData.country,
      weather: weatherData.weather[0].main,
      description: weatherData.weather[0].description,
      currTemp: weatherData.main.temp,
      maxTemp: weatherData.main.temp_max,
      minTemp: weatherData.main.temp_min,
      humidity: weatherData.main.humidity,
      systemDate: new Date(weatherData.dt * 1000),
      queryDate: new Date(),
    };
  } catch(e) {
    return {
      status: 404,
      message: "Country/City Not Found!",
    };
  }
}
