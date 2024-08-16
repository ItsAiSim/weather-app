import { WeatherData } from "../models/weather.ts";
import SearchHistory from "./searchHistory.tsx";
import Image from "next/image";
import { formatDate, formatTemperature } from "../utilities/formatter.ts";
import ToggleBox from "./toggleBox.tsx";

interface weatherBoxProps {
  weather: WeatherData | undefined;
}

export default function WeatherBox(props: weatherBoxProps) {
  let weatherImage = <></>;
  if (props.weather) {
    if (
      props.weather.weather === "Clouds" ||
      props.weather.weather === "Clear"
    ) {
      weatherImage = (
        <Image
          src="/sun.png"
          width={300}
          height={250}
          alt="Sun"
          className="sun-icon"
        />
      );
    } else {
      weatherImage = (
        <Image
          src="/cloud.png"
          width={300}
          height={250}
          alt="Cloud"
          className="cloud-icon"
        />
      );
    }
  }

  return (
    <div className="weather-box-container">
      <ToggleBox />
      <div className="weather-box">
        <div className="weather-icon">{weatherImage}</div>
        <div className="main-weather-info-group">
          <div className="today-weather-group">
            <h1 className="header">Today's Weather</h1>
            <div className="curr-temperature">
              {props.weather ? formatTemperature(props.weather.currTemp) : "-"}
              &deg;
            </div>
            {props.weather?.maxTemp && (
              <div className="max-temperature">
                {`H: ${formatTemperature(
                  props.weather.maxTemp
                )}° L: ${formatTemperature(props.weather.minTemp)}°`}
              </div>
            )}
          </div>
          <div className="city-info-group">
            <div className="city">
              {props.weather
                ? `${props.weather.city}, ${props.weather.country}`
                : "-"}
            </div>
          </div>
          <div className="sub-weather-info-group">
            <div className="weather">
              {props.weather ? props.weather.weather : "-"}
            </div>
            <div className="humidity">
              Humidity: {props.weather ? props.weather.humidity : "-"}%
            </div>
            <div className="time">
              {formatDate(
                props.weather ? props.weather.systemDate : new Date()
              )}
            </div>
          </div>
        </div>
        <SearchHistory />
      </div>
    </div>
  );
}
