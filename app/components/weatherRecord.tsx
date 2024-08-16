import Image from "next/image";
import Button from "./button.tsx";
import { WeatherData } from "../models/weather.ts";
import { HistoryDispatchContext } from "../contexts/historiesContext.ts";
import { useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext.ts";

interface weatherRecordProps {
  index: number;
  city: string;
  country: string;
  systemDate: string;
  queryDate: string;
  data: WeatherData;
}

export default function WeatherRecord(props: weatherRecordProps) {
  const dispatch = useContext(HistoryDispatchContext);
  const getHistory = useContext(WeatherContext);
  return (
    <div key={props.index} className="record-box">
      <div className="record-city">
        {props.city},{props.country}
      </div>
      <div className="record-date">{props.queryDate}</div>
      <div className="history-button-group">
        <Button
          className="history-button"
          onClick={() => getHistory(props.data)}
          imagePath="/search-gray.svg"
          iconClassName="history-icon"
          alt="Search"
        />
        <Button
          className="history-button"
          onClick={() =>
            dispatch({ type: "delete", indexToRemove: props.index })
          }
          imagePath="/delete-gray.svg"
          iconClassName="history-icon"
          alt="Delete"
        />
      </div>
    </div>
  );
}
