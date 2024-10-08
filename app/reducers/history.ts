import { WeatherData } from "../models/weather.ts";

export interface AddHistoryAction {
  type: "add";
  history: WeatherData;
}

export interface DeleteHistoryAction {
  type: "delete";
  indexToRemove: number;
}

export default function historyReducer(
  histories: Array<WeatherData>,
  action: AddHistoryAction | DeleteHistoryAction
) {
  switch (action.type) {
    case "add": {
      return [...histories, action.history];
    }
    case "delete": {
      const currHistories = [...histories];
      const newHistories =
        currHistories.length > 0 && currHistories.length !== 1
          ? currHistories
              .slice(0, action.indexToRemove)
              .concat(
                currHistories.slice(
                  action.indexToRemove + 1,
                  currHistories.length
                )
              )
          : [];
      return newHistories;
    }
    default: {
      return histories;
    }
  }
}
