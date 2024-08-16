"use client";

import { useReducer, useState } from "react";
import { getWeather } from "./api/weather.ts";
import { WeatherData } from "./models/weather.ts";
import { NotFoundError } from "./models/errors.ts";
import SearchBar from "./components/searchBar.tsx";
import WeatherBox from "./components/weatherBox.tsx";
import Image from "next/image";
import historyReducer from "./reducers/history.ts";
import {
  HistoriesContext,
  HistoryDispatchContext,
} from "./contexts/historiesContext.ts";
import { WeatherContext } from "./contexts/weatherContext.ts";

function instanceOfWeatherData(data: any): data is WeatherData {
  return "city" in data;
}

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData>();
  const [error, setError] = useState<NotFoundError>();
  const [history, dispatch] = useReducer(historyReducer, []);

  async function search() {
    if (input !== "") {
      const weather = await getWeather(input);
      if (instanceOfWeatherData(weather)) {
        setWeather(weather);
        setError(undefined);
        dispatch({type: "add", history: weather});
      } else {
        setError(weather);
      }
      setInput("");
    }
  }

  return (
    <div className="main-body">
      <SearchBar onSearch={search} input={input} onChange={setInput} />
      <div className="error-message">
        {error && <Image src="/error.svg" width={20} height={20} alt="Error" />}
        {error && `${error.message}`}
      </div>
      <HistoriesContext.Provider value={history}>
        <HistoryDispatchContext.Provider value={dispatch}>
          <WeatherContext.Provider value={setWeather}>
            <WeatherBox
              weather={weather}
            />
          </WeatherContext.Provider>
        </HistoryDispatchContext.Provider>
      </HistoriesContext.Provider>
    </div>
  );
}
