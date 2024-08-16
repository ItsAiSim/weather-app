import { MouseEventHandler } from "react";
import Button from "./button.tsx";

interface SearchBarProps {
  onSearch: MouseEventHandler<HTMLButtonElement>;
  input: string;
  onChange: Function;
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <div className="search-bar-container">
      <div className="relative search-box-container">
        <input
          type="text"
          id="search"
          className="search-input"
          placeholder=""
          value={props.input}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        />
        <label className="search-label">Country</label>
      </div>
      <Button
        className="search-button"
        onClick={props.onSearch}
        imagePath="/search.svg"
        iconClassName="search-icon"
        alt="Search"
      />
    </div>
  );
}
