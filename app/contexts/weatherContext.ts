import { createContext, Dispatch, SetStateAction } from "react";
import { WeatherData } from "../models/weather.ts";

export const WeatherContext = createContext<
  Dispatch<SetStateAction<WeatherData | undefined>>
>({} as Dispatch<SetStateAction<WeatherData | undefined>>);
