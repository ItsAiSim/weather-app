import { MouseEventHandler } from "react";
import Image from "next/image";

interface searchBarProps {
  onSearch: MouseEventHandler<HTMLButtonElement>;
  input: string;
  onChange: Function;
}

export default function SearchBar(props: searchBarProps) {
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
      <button className="search-button" onClick={props.onSearch}>
        <Image
          src="/search.svg"
          width={560}
          height={620}
          alt="Search"
          className="search-icon"
        />
      </button>
    </div>
  );
}
