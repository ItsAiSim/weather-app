import { createContext, Dispatch } from "react";
import { WeatherData } from "../models/weather.ts";
import { AddHistoryAction, DeleteHistoryAction } from "../reducers/history.ts";

export const HistoriesContext = createContext<Array<WeatherData>>([]);
export const HistoryDispatchContext = createContext<
  Dispatch<AddHistoryAction | DeleteHistoryAction>
>({} as Dispatch<AddHistoryAction | DeleteHistoryAction>);
