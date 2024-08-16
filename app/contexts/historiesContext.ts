import { createContext, Dispatch } from "react";
import { WeatherData } from "../models/weather.ts";
import { addHistoryAction, deleteHistoryAction } from "../reducers/history.ts";

export const HistoriesContext = createContext<Array<WeatherData>>([]);
export const HistoryDispatchContext = createContext<
  Dispatch<addHistoryAction | deleteHistoryAction>
>({} as Dispatch<addHistoryAction | deleteHistoryAction>);
