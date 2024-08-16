import Image from "next/image";
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
        <button
          className="history-button"
          onClick={() => getHistory(props.data)}
        >
          <Image
            src="/search-gray.svg"
            width={560}
            height={560}
            alt="Search"
            className="history-icon"
          />
        </button>
        <button
          className="history-button"
          onClick={() =>
            dispatch({ type: "delete", indexToRemove: props.index })
          }
        >
          <Image
            src="/delete-gray.svg"
            width={400}
            height={400}
            alt="Delete"
            className="history-icon"
          />
        </button>
      </div>
    </div>
  );
}
