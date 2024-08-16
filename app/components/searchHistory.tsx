import WeatherRecord from "./weatherRecord.tsx";
import { HistoriesContext } from "../contexts/historiesContext.ts";
import { useContext } from "react";
import { formatDate } from "../utilities/formatter.ts";

export default function SearchHistory() {
  const history = useContext(HistoriesContext);
  return (
    <div className="search-history-container">
      <div className="search-history-box">
        <h2>Search History</h2>
        <div className="record-container">
          {history.length > 0 &&
            history
              .sort((a, b) => {
                return (
                  Date.parse(b.queryDate.toString()) -
                  Date.parse(a.queryDate.toString())
                );
              })
              .map((data, index) => (
                <WeatherRecord
                  data={data}
                  key={index}
                  index={index}
                  city={data.city}
                  country={data.country}
                  systemDate={formatDate(data.systemDate)}
                  queryDate={formatDate(data.queryDate)}

                />
              ))}
        </div>
      </div>
    </div>
  );
}
